import React, {Component} from "react";
import RaisedButton from "material-ui/RaisedButton";
import {Grid, Row, Col} from "react-flexbox-grid";
import {SearchForm} from "./SearchForm";
import {SearchTable} from "./SearchTable";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
 
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

const customContentStyle = {
  width: "100%",
  maxWidth: "none",
};

class SearchAgreement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                disabled={true}
                onTouchTap={this.handleClose}
                />,
        ];

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

                <div>
                    <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
                    <Dialog
                        title="Dialog With Actions"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        contentStyle={customContentStyle}
                        >
                        Only actions can close this dialog.

                        <RaisedButton label="<asdasd></asdasd>g" onTouchTap={this.handleOpen} />
                        <Dialog
                            title="asdasdasdns"
                            modal={true}
                            actions={actions}
                            open={this.state.open}
                            >
                            asdasdasd
                        </Dialog>
                    </Dialog>
                </div>
            </div>
        );
    }
}

export default SearchAgreement;