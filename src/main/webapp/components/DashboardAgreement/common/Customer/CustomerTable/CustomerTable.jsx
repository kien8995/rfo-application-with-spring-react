import React, {PropTypes} from "react";
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
                    <TableRow key={row.rfoNumberId} value={row} selected={row.selected}>
                        <TableRowColumn>{row.rfoNumber}</TableRowColumn>
                        <TableRowColumn>{row.rfoName}</TableRowColumn>
                        <TableRowColumn>{row.customerType.customerType}</TableRowColumn>
                        <TableRowColumn>{row.postcode}</TableRowColumn>
                        <TableRowColumn>{row.company.businessArea}</TableRowColumn>
                        <TableRowColumn>{row.regionType.regionType}</TableRowColumn>
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

CustomerTable.propTypes = {
    tableData: PropTypes.array.isRequired,
    onRowSelected: PropTypes.func.isRequired
};

CustomerTable.defaultProps = {
    tableData: [],
    onRowSelected: (e) => e
};

export default CustomerTable;