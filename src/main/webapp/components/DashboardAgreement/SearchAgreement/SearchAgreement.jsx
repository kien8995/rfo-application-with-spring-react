import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as agreementActions from "../../../actions/agreementActions";

import RaisedButton from "material-ui/RaisedButton";
import {Grid, Row, Col} from "react-flexbox-grid";
import {SearchForm} from "./SearchForm";
import {SearchTable} from "./SearchTable";

let tableData = [
    {
        id: 1,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        id: 2,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        id: 3,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        id: 4,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        id: 5,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    }
];

class SearchAgreement extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    onTextChange() {
        
    }

    render() {
        return (
            <div>
                <Grid>
                    <SearchForm />
                    <SearchTable
                        tableData={tableData}/>
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