import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
from "material-ui/Table";

import dateFormat from "dateformat";

const SearchTable = ({
    tableData,
    onSearchTableChange
}) => {

    let onRowSelected = (key) => {
        for (let agreement of tableData) {
            agreement["selected"] = false;
        }

        if (key.length === 1) {
            tableData[key[0]]["selected"] = true;
            onSearchTableChange({ agreementList: tableData });
            onSearchTableChange({ selectedRow: tableData[key[0]] });
        } else {
            onSearchTableChange({ selectedRow: null });
        }
    };

    return (
        <div>
            <Grid>
                <Table
                    height={"300px"}
                    fixedHeader={true}
                    fixedFooter={true}
                    selectable={true}
                    multiSelectable={false}
                    onRowSelection={onRowSelected}
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
                            <TableRow key={`${row.agreementPK.agreementNumber}-${row.agreementPK.variantNumber}`} value={row} selected={row.selected}>
                                <TableRowColumn>{row.rfoNumberSet[0].rfoNumber}</TableRowColumn>
                                <TableRowColumn>{row.rfoNumberSet[0].rfoName}</TableRowColumn>
                                <TableRowColumn>{row.rfoNumberSet[0].postcode}</TableRowColumn>
                                <TableRowColumn><a href="#">{row.authorisedBy}</a></TableRowColumn>
                                <TableRowColumn>{dateFormat(new Date(row.startDate), "yyyy-mm-dd") }</TableRowColumn>
                                <TableRowColumn>{dateFormat(new Date(row.endDate), "yyyy-mm-dd") }</TableRowColumn>
                                <TableRowColumn>{`${row.agreementPK.agreementNumber}/${row.agreementPK.variantNumber}`}</TableRowColumn>
                                <TableRowColumn>{row.agreementStatus.status}</TableRowColumn>
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