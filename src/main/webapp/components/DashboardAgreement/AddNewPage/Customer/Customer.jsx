import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from "material-ui/Table";

const items = [
    <MenuItem key={1} value={"Never"} primaryText="Never" />,
    <MenuItem key={2} value={"Every Night"} primaryText="Every Night" />,
    <MenuItem key={3} value={"Weeknights"} primaryText="Weeknights" />,
    <MenuItem key={4} value={"Weekends"} primaryText="Weekends" />,
    <MenuItem key={5} value={"Weekly"} primaryText="Weekly" />,
];


const Customer = ({
    handleTextChange,
    rfoNumber,
    name,
    postcode,
    customerType,
    handleCustomerTypeChange,
    businessArea,
    handleBusinessAreaChange,
    region,
    handleRegionChange,
    tableData,
    handleRowSelection

}) => {
    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>RFO Number</Col>
                    <Col md={4}><TextField
                        name="rfoNumber"
                        value={rfoNumber}
                        onChange={handleTextChange}
                        hintText="Ex: S00123"
                        floatingLabelText="RFO Number"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Customer Type</Col>
                    <Col md={4}><SelectField
                        value={customerType}
                        onChange={handleCustomerTypeChange}
                        floatingLabelText="Customer Type"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Name</Col>
                    <Col md={4}><TextField
                        name="name"
                        value={name}
                        onChange={handleTextChange}
                        hintText="Ex: Bank of England"
                        floatingLabelText="Name"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Postcode</Col>
                    <Col md={4}><TextField
                        name="postcode"
                        value={postcode}
                        onChange={handleTextChange}
                        hintText="Ex: RG21 3RF"
                        floatingLabelText="Postcode"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Business Area</Col>
                    <Col md={4}><SelectField
                        value={businessArea}
                        onChange={handleBusinessAreaChange}
                        floatingLabelText="Business Area"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Region</Col>
                    <Col md={4}><SelectField
                        value={region}
                        onChange={handleRegionChange}
                        floatingLabelText="Region"
                        >
                        {items}
                    </SelectField></Col>
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
                onRowSelection={handleRowSelection}
                >
                <TableHeader
                    displaySelectAll={true}
                    adjustForCheckbox={true}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="6" style={{ textAlign: "center" }}>
                            Customer Table
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="RFO Number">RFO Number</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Customer Type">Customer Type</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Postcode">Postcode</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Business Area">Business Area</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Region">Region</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={true}
                    deselectOnClickaway={false}
                    showRowHover={true}
                    stripedRows={false}
                    >
                    {tableData.map((row, index) => (
                        <TableRow key={row.id} value={row} selected={row.selected}>
                            <TableRowColumn>{row.rfoNumber}</TableRowColumn>
                            <TableRowColumn>{row.name}</TableRowColumn>
                            <TableRowColumn>{row.customerType}</TableRowColumn>
                            <TableRowColumn>{row.postcode}</TableRowColumn>
                            <TableRowColumn>{row.businessArea}</TableRowColumn>
                            <TableRowColumn>{row.region}</TableRowColumn>
                        </TableRow>
                    )) }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={true}
                    >
                    <TableRow>
                        <TableRowColumn style={{ textAlign: "center" }}>
                            {tableData.length} result(s).
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

export default Customer;