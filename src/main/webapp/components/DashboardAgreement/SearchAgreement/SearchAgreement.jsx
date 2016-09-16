import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as agreementActions from "../../../actions/agreementActions";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {Grid, Row, Col} from "react-flexbox-grid";
import {SearchForm} from "./SearchForm";
import {SearchTable} from "./SearchTable";

import {Confirmation} from "../common";

const customContentStyle = {
    width: "100%",
    height: "100%",
    maxWidth: "none"
};

class SearchAgreement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            searchForm: {
                customerType: "",
                customerName: "",
                customerCode: "",
                postcode: "",
                csm: "",
                approver: "",
                status: "",
                startDate: null,
                endDate: null,
                agreementNumber: ""
            },
            searchTable: {
                agreementList: [],
                selectedRow: null
            },
            confirmation: {
                tabIndex: 0
            }
        };

        this.onSearchFormChange = this.onSearchFormChange.bind(this);
        this.onSearchTableChange = this.onSearchTableChange.bind(this);
        this.onConfirmationChange = this.onConfirmationChange.bind(this);

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.approveAgreement = this.approveAgreement.bind(this);
        this.terminateAgreement = this.terminateAgreement.bind(this);
    }

    componentDidMount() {
        // this.props.agreementActions.loadAllAgreements().then(() => {
        //     let list = this.props.agreements.map(agreement => {
        //         return Object.assign({}, agreement);
        //     });
        //     this.onSearchTableChange({ agreementList: list });
        // });
        onSearchTableChange({agreementList: this.props.agreements});
    }

    componentWillReceiveProps(nextProps) {
        console.log("out");
        if (this.props !== nextProps && this.state.searchTable.selectedRow !== null && nextProps.agreements !== null) {
            console.log("in");
            let list = this.props.agreements.map((agreement, index) => {
                return Object.assign({}, agreement);
            });

            let agreement = this.props.agreements.filter(agreement => {
                return this.state.searchTable.selectedRow.agreementPK.agreementNumber === agreement.agreementPK.agreementNumber;
            });

            this.onSearchTableChange({
                agreementList: list,
                selectedRow: agreement[0]
            });
            console.log(this.props.agreements);
        }
    }


    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    onSearchFormChange(value) {
        this.setState({ searchForm: Object.assign({}, this.state.searchForm, value) });
    }

    onSearchTableChange(value) {
        this.setState({ searchTable: Object.assign({}, this.state.searchTable, value) });
    }

    onConfirmationChange(value) {
        this.setState({ confirmation: Object.assign({}, this.state.confirmation, value) });
    }

    approveAgreement() {
        const agreement = Object.assign({}, this.state.searchTable.selectedRow);
        this.props.agreementActions.updateAgreement(Object.assign({}, agreement, { agreementStatus: { agreementStatusId: 3 } }));
    }

    terminateAgreement() {
        const agreement = Object.assign({}, this.state.searchTable.selectedRow);
        this.props.agreementActions.updateAgreement(Object.assign({}, agreement, { agreementStatus: { agreementStatusId: 4 } }));
    }

    render() {

        const agreement = this.state.searchTable.selectedRow;
        const customer = {
            rfoNumber: agreement === null ? "" : agreement.rfoNumberSet[0].rfoNumber,
            rfoName: agreement === null ? "" : agreement.rfoNumberSet[0].rfoName,
            postcode: agreement === null ? "" : agreement.rfoNumberSet[0].postcode,
            customerType: agreement === null ? "" : agreement.rfoNumberSet[0].customerType.customerType,
            businessArea: agreement === null ? "" : agreement.rfoNumberSet[0].company.businessArea,
            region: agreement === null ? "" : agreement.rfoNumberSet[0].regionType.regionType
        };

        const basics = {
            agreementName: agreement === null ? "" : agreement.name,
            agreementDescription: agreement === null ? "" : agreement.description,
            startDate: agreement === null ? null : new Date(agreement.startDate),
            endDate: agreement === null ? null : new Date(agreement.endDate),
            signedAgreement: agreement === null ? "" : agreement.signRequired,
            fundingMethod: agreement === null ? "" : agreement.fundingMethod.fundingMethodName,
            paymentTo: agreement === null ? "" : agreement.paymentTo,
            agendaPayment: "",
            handlingChange: agreement === null ? "" : agreement.handlingChange,
            dealersVisibility: agreement === null ? "" : agreement.dealerVisibility,
            volumeDiscountType: "",
            discountUnit: agreement === null ? "" : agreement.discountUnit,
            combinability: agreement === null ? "" : agreement.combinability,
            status: agreement === null ? "" : agreement.agreementStatus.status
        };

        let actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose} />
        ];

        if (basics.status === "Awaiting Approval") {
            actions.unshift(
                <FlatButton
                    label="Approve"
                    primary={true}
                    onTouchTap={this.approveAgreement} />
            );
        }

        if (basics.status === "Approved") {
            actions.unshift(
                <FlatButton
                    label="Terminate"
                    primary={true}
                    onTouchTap={this.terminateAgreement} />
            );
        }

        return (
            <div>
                <Grid>
                    <SearchForm
                        agreements={this.props.agreements}
                        customerType={this.state.searchForm.customerType}
                        customerName={this.state.searchForm.customerName}
                        customerCode={this.state.searchForm.customerCode}
                        postcode={this.state.searchForm.postcode}
                        csm={this.state.searchForm.csm}
                        approver={this.state.searchForm.approver}
                        status={this.state.searchForm.status}
                        startDate={this.state.searchForm.startDate}
                        endDate={this.state.searchForm.endDate}
                        agreementNumber={this.state.searchForm.agreementNumber}
                        onSearchFormChange={this.onSearchFormChange}
                        onSearchTableChange={this.onSearchTableChange} />
                    <SearchTable
                        tableData={this.state.searchTable.agreementList}
                        onSearchTableChange={this.onSearchTableChange} />
                    <RaisedButton
                        label="View Agreement"
                        primary={true}
                        onTouchTap={this.handleOpen}
                        disabled={this.state.searchTable.selectedRow == null}
                        />
                    <Dialog
                        title="View Agreement"
                        actions={actions}
                        modal={true}
                        contentStyle={customContentStyle}
                        open={this.state.open}
                        autoScrollBodyContent={false}
                        >
                        <Confirmation
                            customer={customer}
                            basics={basics}
                            confirmation={this.state.confirmation}
                            onConfirmationChange={this.onConfirmationChange} />
                    </Dialog>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        agreements: state.agreements
    };
}

function mapDispatchToProps(dispatch) {
    return {
        agreementActions: bindActionCreators(agreementActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchAgreement);