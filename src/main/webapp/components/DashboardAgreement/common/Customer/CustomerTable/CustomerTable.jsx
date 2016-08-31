import React from "react";
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";

const CustomerTable = ({
    tableData,
    onRowSelected
}) => {
    return (
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
    );
};

export default CustomerTable;