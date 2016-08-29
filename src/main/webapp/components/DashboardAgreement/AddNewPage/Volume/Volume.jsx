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

const Volume = ({
    handleTextChange,
    rfoNumber,
    customerName,
    bandingValueFrom,
    bandingValueTo,
    bandingTableData,
    onAddBandingValue,
    triggerCredit,
    handleTriggerCreditChange,
    payableTo,
    handlePayableToChange
}) => {
    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>RFO Number</Col>
                    <Col md={4}>{rfoNumber}</Col>
                </Row>
                <br/>
                <br/>
                <Row middle="md">
                    <Col md={2}>Customer Name</Col>
                    <Col md={4}>{customerName}</Col>
                </Row>
                <br/>
                <Row middle="md">
                    <Col md={2}>Banding Value From</Col>
                    <Col md={4}><TextField
                        name="bandingValueFrom"
                        value={bandingValueFrom}
                        onChange={handleTextChange}
                        hintText="Ex: 100"
                        floatingLabelText="Banding Value From"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Banding Value To</Col>
                    <Col md={4}><TextField
                        name="bandingValueTo"
                        value={bandingValueTo}
                        onChange={handleTextChange}
                        hintText="Ex: 100"
                        floatingLabelText="Banding Value To"
                        /></Col>
                </Row>
                <br/>
                <Row middle="md">
                    <Col md={2}></Col>
                    <Col md={4}><RaisedButton label="Add" primary={true} onClick={onAddBandingValue}/></Col>
                </Row>
            </Grid>

            <Table
                height={"100px"}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={false}
                >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="1" style={{ textAlign: "center" }}>
                            Customer Table
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="Banding Value">Banding Value</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={false}
                    showRowHover={true}
                    stripedRows={false}
                    >
                    {bandingTableData.map((row, index) => (
                        <TableRow key={row} value={row} selected={row.selected}>
                            <TableRowColumn>{row}</TableRowColumn>
                        </TableRow>
                    )) }
                </TableBody>
                <TableFooter
                    adjustForCheckbox={true}
                    >
                    <TableRow>
                        <TableRowColumn style={{ textAlign: "center" }}>
                            {bandingTableData.length} result(s).
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>

            <Grid>
                <Row middle="md">
                    <Col md={2}>Trigger Credit</Col>
                    <Col md={4}><SelectField
                        value={triggerCredit}
                        onChange={handleTriggerCreditChange}
                        floatingLabelText="Trigger Credit"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Payable To</Col>
                    <Col md={4}><SelectField
                        value={payableTo}
                        onChange={handlePayableToChange}
                        floatingLabelText="Payable To"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Volume;