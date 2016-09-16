import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";

const customerTypes = [
    <MenuItem key={1} value={"Fleet"} primaryText="Fleet" />,
    <MenuItem key={2} value={"Leasing"} primaryText="Leasing" />
];

const csms = [
    <MenuItem key={1} value={"Tim Slater"} primaryText="Tim Slater" />
];

const approvers = [
    <MenuItem key={1} value={""} primaryText="" />
];

const statusTyppes = [
    <MenuItem key={1} value={"Draft"} primaryText="Draft" />,
    <MenuItem key={2} value={"Awaiting Approval"} primaryText="Awaiting Approval" />,
    <MenuItem key={3} value={"Approved"} primaryText="Approved" />,
    <MenuItem key={4} value={"Discontinued"} primaryText="Discontinued" />,
    <MenuItem key={5} value={"Reject"} primaryText="Reject" />,
    <MenuItem key={6} value={"Received"} primaryText="Received" />
];

const SearchForm = ({
    agreements,
    customerType,
    customerName,
    customerCode,
    postcode,
    csm,
    approver,
    status,
    startDate,
    endDate,
    agreementNumber,
    onSearchFormChange,
    onSearchTableChange
}) => {

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;
        onSearchFormChange(object);
    };

    let onStartDateChange = (event, date) => {
        onSearchFormChange({ startDate: date });
    };

    let onEndDateChange = (event, date) => {
        onSearchFormChange({ endDate: date });
    };

    let onCustomerTypeChange = (event, index, value) => {
        onSearchFormChange({ customerType: value });
    };

    let onCSMChange = (event, index, value) => {
        onSearchFormChange({ csm: value });
    };

    let onApproverChange = (event, index, value) => {
        onSearchFormChange({ approver: value });
    };

    let onStatusChange = (event, index, value) => {
        onSearchFormChange({ status: value });
    };

    let onButtonSearchClick = () => {
        let list = agreements.filter((a) => {
            return (
                (customerType === "" || a.rfoNumberSet[0].customerType.customerType.indexOf(customerType) !== -1) &&
                (customerName === "" || a.rfoNumberSet[0].rfoName.indexOf(customerName) !== -1) &&
                (customerCode === "" || a.rfoNumberSet[0].rfoNumber.indexOf(customerCode) !== -1) &&
                (postcode === "" || a.rfoNumberSet[0].postcode.indexOf(postcode) !== -1) &&

                (csm === "" || a.authorisedBy.indexOf(csm) !== -1) &&
                (approver === "" || a.rfoNumberSet[0].authorisedBy.indexOf(approver) !== -1) &&
                (status === "" || a.agreementStatus.status.indexOf(status) !== -1) &&
                (startDate === null || `${new Date(a.startDate).getFullYear()}-${new Date(a.startDate).getMonth()}-${new Date(a.startDate).getDate()}` === `${new Date(startDate).getFullYear()}-${new Date(startDate).getMonth()}-${new Date(startDate).getDate()}`) &&
                (endDate === null || `${new Date(a.endDate).getFullYear()}-${new Date(a.endDate).getMonth()}-${new Date(a.endDate).getDate()}` === `${new Date(endDate).getFullYear()}-${new Date(endDate).getMonth()}-${new Date(endDate).getDate()}`) &&
                (agreementNumber === "" || a.agreementPK.agreementNumber.indexOf(agreementNumber) !== -1)
            );
        });

        onSearchTableChange({ agreementList: list });
    };

    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>Customer Type</Col>
                    <Col md={4}><SelectField
                        value={customerType}
                        onChange={onCustomerTypeChange}
                        floatingLabelText="Customer Type"
                        >
                        {customerTypes}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Name</Col>
                    <Col md={4}><TextField
                        name="customerName"
                        value={customerName}
                        onChange={onTextChange}
                        hintText="Ex: Bank of England"
                        floatingLabelText="Name"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Customer Code</Col>
                    <Col md={4}><TextField
                        name="customerCode"
                        value={customerCode}
                        onChange={onTextChange}
                        hintText="Ex: S00123"
                        floatingLabelText="Customer Code"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Postcode</Col>
                    <Col md={4}><TextField
                        name="postcode"
                        value={postcode}
                        onChange={onTextChange}
                        hintText="Ex: RG21 3RF"
                        floatingLabelText="Postcode"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>CSM</Col>
                    <Col md={4}><SelectField
                        value={csm}
                        onChange={onCSMChange}
                        floatingLabelText="CSM"
                        >
                        {csms}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Approver</Col>
                    <Col md={4}><SelectField
                        value={approver}
                        onChange={onApproverChange}
                        floatingLabelText="Approver"
                        >
                        {approvers}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Status</Col>
                    <Col md={4}><SelectField
                        value={status}
                        onChange={onStatusChange}
                        floatingLabelText="Status"
                        >
                        {statusTyppes}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Start Date</Col>
                    <Col md={4}> <DatePicker
                        hintText="Start Date"
                        value={startDate}
                        onChange={onStartDateChange}/></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>End Date</Col>
                    <Col md={4}> <DatePicker
                        hintText="End Date"
                        value={endDate}
                        onChange={onEndDateChange}/></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agreement Number</Col>
                    <Col md={4}><TextField
                        name="agreementNumber"
                        value={agreementNumber}
                        onChange={onTextChange}
                        hintText="RG21 3RF"
                        floatingLabelText="Agreement Number"
                        /></Col>
                </Row>
                <br/>
                <Row middle="md">
                    <Col md={2}></Col>
                    <Col md={4}><RaisedButton
                        label="Search"
                        primary={true}
                        onClick={onButtonSearchClick} /></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default SearchForm;