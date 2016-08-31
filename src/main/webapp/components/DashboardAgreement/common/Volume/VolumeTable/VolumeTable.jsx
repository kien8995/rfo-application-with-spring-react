import React, {Component} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import {
    Table, 
    TableBody, 
    TableFooter, 
    TableHeader, 
    TableHeaderColumn, 
    TableRow, 
    TableRowColumn
} from "material-ui/Table";

const VolumeTable = ({
    bandingTableData
}) => {
    return (
        <div>
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
        </div>
    );
};

export default VolumeTable;