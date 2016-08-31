import React, {Component} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from "material-ui/Table";

const SearchTable = ({
    handleRowSelection,
    tableData
}) => {
    return (
        <div>
            <Grid>
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
                            <TableHeaderColumn colSpan="8" style={{ textAlign: "center" }}>
                                Agreement Table
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="RFO Number">RFO Number</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Customer">Customer</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Postcode">Postcode</TableHeaderColumn>
                            <TableHeaderColumn tooltip="CSM">CSM</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Start Date">Start Date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="End Date">End Date</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Agreement">Agreement</TableHeaderColumn>
                            <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
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
                                <TableRowColumn>{row.customer}</TableRowColumn>
                                <TableRowColumn>{row.postcode}</TableRowColumn>
                                <TableRowColumn>{row.csm}</TableRowColumn>
                                <TableRowColumn>{row.startDate}</TableRowColumn>
                                <TableRowColumn>{row.endDate}</TableRowColumn>
                                <TableRowColumn>{row.agreement}</TableRowColumn>
                                <TableRowColumn>{row.status}</TableRowColumn>
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
            </Grid>
        </div>
    );
};

export default SearchTable;