import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import DatePicker from "material-ui/DatePicker";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import ActionFavorite from "material-ui/svg-icons/action/favorite";
import ActionFavoriteBorder from "material-ui/svg-icons/action/favorite-border";


const items = [
    <MenuItem key={1} value={"Never"} primaryText="Never" />,
    <MenuItem key={2} value={"Every Night"} primaryText="Every Night" />,
    <MenuItem key={3} value={"Weeknights"} primaryText="Weeknights" />,
    <MenuItem key={4} value={"Weekends"} primaryText="Weekends" />,
    <MenuItem key={5} value={"Weekly"} primaryText="Weekly" />,
];

const Basics = ({
    handleTextChange,
    rfoNumber,
    customerName,
    agreementName,
    agreementDescription,
    startDate,
    handleStartDateChange,
    endDate,
    handleEndDateChange,
    handleSignedAgreementChange,
    fundingMethod,
    handleFundingMethodChange,
    paymentTo,
    handlePaymentToChange,
    agendaPayment,
    handleAgendaPaymentChange,
    handlingChange,
    dealersVisibility,
    handleDealersVisibilityChange,
    volumeDiscountType,
    handleVolumeDiscountTypeChange,
    discountUnit,
    handleDiscountUnitChange,
    combinability,
    handleCombinabilityChange
}) => {
    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>RFO Number</Col>
                    <Col md={4}>{rfoNumber}</Col>
                </Row>
                <br/>
                <Row middle="md">
                    <Col md={2}>Customer Name</Col>
                    <Col md={4}>{customerName}</Col>
                </Row>
                <br/>
                <Row middle="md">
                    <Col md={2}>Agreement Number</Col>
                    <Col md={4}>1234/001</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agreement Name</Col>
                    <Col md={4}><TextField
                        name="agreementName"
                        value={agreementName}
                        onChange={handleTextChange}
                        hintText="Ex: Sales Agreement"
                        floatingLabelText="Agreement Name"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agreement Description</Col>
                    <Col md={4}><TextField
                        name="agreementDescription"
                        value={agreementDescription}
                        onChange={handleTextChange}
                        hintText="Agreement Description"
                        multiLine={true}
                        rows={3}
                        /></Col>
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
                <br/>
                <Row middle="md">
                    <Col md={2}>Is a signed agreement required?</Col>
                    <Col md={4}>  <RadioButtonGroup
                        name="signedAgreement"
                        defaultSelected="yes"
                        onChange={handleSignedAgreementChange}>
                        <RadioButton
                            value="yes"
                            label="Yes"
                            />
                        <RadioButton
                            value="no"
                            label="No"
                            />
                    </RadioButtonGroup></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Funding Method</Col>
                    <Col md={4}><SelectField
                        value={fundingMethod}
                        onChange={handleFundingMethodChange}
                        floatingLabelText="Funding Method"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Payment To</Col>
                    <Col md={4}><SelectField
                        value={paymentTo}
                        onChange={handlePaymentToChange}
                        floatingLabelText="Payment To"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agenda Payment</Col>
                    <Col md={4}><SelectField
                        value={agendaPayment}
                        onChange={handleAgendaPaymentChange}
                        floatingLabelText="Agenda Payment"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Handling Change</Col>
                    <Col md={4}><TextField
                        name="handlingChange"
                        value={handlingChange}
                        onChange={handleTextChange}
                        hintText="Ex: 0"
                        floatingLabelText="Handling Change"
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Dealers Visibility</Col>
                    <Col md={4}><SelectField
                        value={dealersVisibility}
                        onChange={handleDealersVisibilityChange}
                        floatingLabelText="Dealers Visibility"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Volume Discount Type</Col>
                    <Col md={4}><SelectField
                        value={volumeDiscountType}
                        onChange={handleVolumeDiscountTypeChange}
                        floatingLabelText="Volume Discount Type"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Discount Unit</Col>
                    <Col md={4}><SelectField
                        value={discountUnit}
                        onChange={handleDiscountUnitChange}
                        floatingLabelText="Discount Unit"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Combinability</Col>
                    <Col md={4}><SelectField
                        value={combinability}
                        onChange={handleCombinabilityChange}
                        floatingLabelText="Combinability"
                        >
                        {items}
                    </SelectField></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default Basics;