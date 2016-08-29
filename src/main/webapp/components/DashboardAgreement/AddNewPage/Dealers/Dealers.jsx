import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from "material-ui/Table";

const Dealers = ({
    handleTextChange,
    dealerCode,
    dealerName,
    dealerTableData,
    applicableDealer,
    handleDealerTableDataRowSelection,
    handleApplicableDealerRowSelection

}) => {
    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>Dealer Code</Col>
                    <Col md={4}><TextField
                        name="dealerCode"
                        value={dealerCode}
                        onChange={handleTextChange}
                        hintText="Ex: WES498"
                        floatingLabelText="Dealer Code"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Dealer Name</Col>
                    <Col md={4}><TextField
                        name="dealerName"
                        value={dealerName}
                        onChange={handleTextChange}
                        hintText="Ex: WES498"
                        floatingLabelText="Dealer Name"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}></Col>
                    <Col md={4}><RaisedButton label="Search" primary={true} /></Col>
                </Row>
            </Grid>

            <Table
                height={"300px"}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={false}
                onRowSelection={handleDealerTableDataRowSelection}
                >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{ textAlign: "center" }}>
                            Matching Dealers
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Code">Code</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Town">Town</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Country">Country</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={false}
                    showRowHover={true}
                    stripedRows={false}
                    >
                    {dealerTableData.map((row, index) => (
                        <TableRow key={row.code} value={row} selected={row.selected}>
                            <TableRowColumn>{row.code}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.town}</TableRowColumn>
                            <TableRowColumn>{row.country}</TableRowColumn>
                        </TableRow>
                    )) }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={true}
                    >
                    <TableRow>
                        <TableRowColumn style={{ textAlign: "center" }}>
                            {dealerTableData.length} result(s).
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>

            <Table
                height={"300px"}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={false}
                onRowSelection={handleApplicableDealerRowSelection}
                >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{ textAlign: "center" }}>
                            Matching Dealers
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Code">Code</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Town">Town</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Country">Country</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={false}
                    showRowHover={true}
                    stripedRows={false}
                    >
                    {applicableDealer.map((row, index) => (
                        <TableRow key={row.code} value={row} selected={row.selected}>
                            <TableRowColumn>{row.code}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.town}</TableRowColumn>
                            <TableRowColumn>{row.country}</TableRowColumn>
                        </TableRow>
                    )) }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={true}
                    >
                    <TableRow>
                        <TableRowColumn style={{ textAlign: "center" }}>
                            {applicableDealer.length} result(s).
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default Dealers;