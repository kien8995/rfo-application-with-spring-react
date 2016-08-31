import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";

const items = [
    <MenuItem key={1} value={"Never"} primaryText="Never" />,
    <MenuItem key={2} value={"Every Night"} primaryText="Every Night" />,
    <MenuItem key={3} value={"Weeknights"} primaryText="Weeknights" />,
    <MenuItem key={4} value={"Weekends"} primaryText="Weekends" />,
    <MenuItem key={5} value={"Weekly"} primaryText="Weekly" />,
];

const SearchForm = ({
    handleTextChange,
    customerType,
    handleCustomerTypeChange,
    customerName,
    customerCode,
    postcode,
    csm,
    handleCSMChange,
    approver,
    handleApproverChange,
    status,
    handleStatusChange,
    startDate,
    handleStartDateChange,
    endDate,
    handleEndDateChange,
    agreementNumber
}) => {
    return (
        <div>
            <Grid>
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
                        name="customerName"
                        value={customerName}
                        onChange={handleTextChange}
                        hintText="Ex: Bank of England"
                        floatingLabelText="Name"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Customer Code</Col>
                    <Col md={4}><TextField
                        name="customerCode"
                        value={customerCode}
                        onChange={handleTextChange}
                        hintText="Ex: S00123"
                        floatingLabelText="Customer Code"
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
                    <Col md={2}>CSM</Col>
                    <Col md={4}><SelectField
                        value={csm}
                        onChange={handleCSMChange}
                        floatingLabelText="CSM"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Approver</Col>
                    <Col md={4}><SelectField
                        value={approver}
                        onChange={handleApproverChange}
                        floatingLabelText="Approver"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Status</Col>
                    <Col md={4}><SelectField
                        value={status}
                        onChange={handleStatusChange}
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
                        onChange={handleStartDateChange}/></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>End Date</Col>
                    <Col md={4}> <DatePicker
                        hintText="End Date"
                        value={endDate}
                        onChange={handleEndDateChange}/></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agreement Number</Col>
                    <Col md={4}><TextField
                        name="agreementNumber"
                        value={agreementNumber}
                        onChange={handleTextChange}
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