import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as agreementActions from "../../../actions/agreementActions";

import RaisedButton from "material-ui/RaisedButton";
import {Grid, Row, Col} from "react-flexbox-grid";
import {SearchForm} from "./SearchForm";
import {SearchTable} from "./SearchTable";

class SearchAgreement extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            }
        };

        this.onSearchFormChange = this.onSearchFormChange.bind(this);
        this.onSearchTableChange = this.onSearchTableChange.bind(this);
    }

    componentDidMount() {
        console.log("callback before");
        this.props.agreementActions.loadAllAgreements().then(() => {
            console.log("callback call");
            this.onSearchTableChange({agreementList: this.props.agreements});
            console.log(this.state.searchTable.agreementList);
        });
        console.log("callback after");
        // onSearchTableChange({agreementList: this.props.agreements});
    }

    onSearchFormChange(value) {
        this.setState({ searchForm: Object.assign({}, this.state.searchForm, value) });
    }

    onSearchTableChange(value) {
        this.setState({ searchTable: Object.assign({}, this.state.searchTable, value) });
    }

    render() {
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
                        // onTouchTap={this.handleNext}
                        // disabled={this.state.customer.selectedRow == null}
                        />
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