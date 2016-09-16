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
    }

    componentDidMount() {
        this.props.agreementActions.loadAllAgreements().then(() => {
            this.onSearchTableChange({ agreementList: this.props.agreements });
        });
        // onSearchTableChange({agreementList: this.props.agreements});
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

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />
        ];

        const agreement = this.state.searchTable.selectedRow;

        const customer = {
            rfoNumber: agreement.rfoNumberSet[0].rfoNumber,
            rfoName: agreement.rfoNumberSet[0].rfoName,
            postcode: agreement.rfoNumberSet[0].postcode,
            customerType: agreement.rfoNumberSet[0].customerType.customerType,
            businessArea: agreement.rfoNumberSet[0].company.businessArea,
            region: agreement.rfoNumberSet[0].regionType.regionType
        };

        const basics = {
            agreementName: agreement.name,
            agreementDescription: agreement.description,
            startDate: new Date(agreement.startDate),
            endDate: new Date(agreement.endDate),
            signedAgreement: agreement.signRequired,
            fundingMethod: agreement.fundingMethod.fundingMethodName,
            paymentTo: agreement.paymentTo,
            agendaPayment: "",
            handlingChange: agreement.handlingChange,
            dealersVisibility: agreement.dealerVisibility,
            volumeDiscountType: "",
            discountUnit: agreement.discountUnit,
            combinability: agreement.combinability,
            status: agreement.agreementStatus.status
        };

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
                        title="Dialog With Custom Width"
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