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

const DealerTable = ({
    dealers,
    applicableDealers,
    onDealersRowSelected,
    onApplicableDealersRowSelected
}) => {
    return (
        <div>
            <Table
                height={"300px"}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={false}
                onRowSelection={onDealersRowSelected}
                >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{ textAlign: "center" }}>
                            Dealers Table
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
                    {dealers.map((row, index) => (
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
                            {dealers.length} result(s).
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
                onRowSelection={onApplicableDealersRowSelected}
                >
                <TableHeader
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                    enableSelectAll={false}
                    >
                    <TableRow>
                        <TableHeaderColumn colSpan="4" style={{ textAlign: "center" }}>
                            Applicable Dealers
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
                    {applicableDealers.map((row, index) => (
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
                            {applicableDealers.length} result(s).
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
};

DealerTable.propTypes = {
    dealers: PropTypes.array.isRequired,
    applicableDealers: PropTypes.array.isRequired,
    onDealersRowSelected: PropTypes.func.isRequired,
    onApplicableDealersRowSelected: PropTypes.func.isRequired
};

DealerTable.defaultProps = {
    dealers: [],
    applicableDealers: [],
    onDealersRowSelected: (e) => e,
    onApplicableDealersRowSelected: (e) => e
};

export default DealerTable;