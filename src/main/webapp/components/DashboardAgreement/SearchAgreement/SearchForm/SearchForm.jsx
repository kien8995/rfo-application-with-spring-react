import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";

const items = [
    <MenuItem key={1} value={"Fleet"} primaryText="Fleet" />,
    <MenuItem key={2} value={"Leasing"} primaryText="Leasing" />
];

const SearchForm = ({
    onTextChange,
    customerType,
    onCustomerTypeChange,
    customerName,
    customerCode,
    postcode,
    csm,
    onCSMChange,
    approver,
    onApproverChange,
    status,
    onStatusChange,
    startDate,
    onStartDateChange,
    endDate,
    onEndDateChange,
    agreementNumber
}) => {
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
                        {items}
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
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Approver</Col>
                    <Col md={4}><SelectField
                        value={approver}
                        onChange={onApproverChange}
                        floatingLabelText="Approver"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Status</Col>
                    <Col md={4}><SelectField
                        value={status}
                        onChange={onStatusChange}
                        floatingLabelText="Status"
                        >
                        {items}
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
                    <Col md={4}><RaisedButton label="Search" primary={true} /></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default SearchForm;