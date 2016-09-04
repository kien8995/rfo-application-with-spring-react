import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import DatePicker from "material-ui/DatePicker";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";

const fundingMethods = [
    <MenuItem key={1} value={"Fleet"} primaryText="Fleet" />,
    <MenuItem key={2} value={"Leasing"} primaryText="Leasing" />
];

const paymentTos = [
    <MenuItem key={1} value={"Dealer"} primaryText="Dealer" />,
    <MenuItem key={2} value={"Customer"} primaryText="Customer" />
];

const agendaPayments = [
    <MenuItem key={1} value={"Count and Earn"} primaryText="Count and Earn" />,
];

const dealersVisibilities = [
    <MenuItem key={1} value={"Preferred dealers only"} primaryText="Preferred dealers only" />,
];

const volumeDiscountTypes = [
    <MenuItem key={1} value={"Retrospective Banding"} primaryText="Retrospective Banding" />,
];

const discountUnits = [
    <MenuItem key={1} value={"%"} primaryText="%" />,
];

const combinabilities = [
    <MenuItem key={1} value={"End user support only"} primaryText="End user support only" />,
];

const BasicsForm = ({
    rfoNumber,
    customerName,
    agreementName,
    agreementDescription,
    startDate,
    endDate,
    fundingMethod,
    paymentTo,
    agendaPayment,
    handlingChange,
    dealersVisibility,
    volumeDiscountType,
    discountUnit,
    combinability,
    onTextChange,
    onStartDateChange,
    onEndDateChange,
    onSignedAgreementChange,
    onFundingMethodChange,
    onPaymentToChange,
    onAgendaPaymentChange,
    onDealersVisibilityChange,
    onVolumeDiscountTypeChange,
    onDiscountUnitChange,
    onCombinabilityChange
}) => {
    return (
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
                    onChange={onTextChange}
                    hintText="Ex: Sales Agreement"
                    floatingLabelText="Agreement Name"
                    /></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Agreement Description</Col>
                <Col md={4}><TextField
                    name="agreementDescription"
                    value={agreementDescription}
                    onChange={onTextChange}
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
                <Col md={2}>Funding Method</Col>
                <Col md={4}><SelectField
                    value={fundingMethod}
                    onChange={onFundingMethodChange}
                    floatingLabelText="Funding Method"
                    >
                    {fundingMethods}
                </SelectField></Col>
            </Row>
            <br/>
            <Row middle="md">
                <Col md={2}>Is a signed agreement required?</Col>
                <Col md={4}>  <RadioButtonGroup
                    name="signedAgreement"
                    defaultSelected="yes"
                    onChange={onSignedAgreementChange}
                    >
                    <RadioButton
                        value="yes"
                        label="Yes"
                        disabled={fundingMethod !== "Fleet"}
                        />
                    <RadioButton
                        value="no"
                        label="No"
                        disabled={fundingMethod !== "Fleet"}
                        />
                </RadioButtonGroup></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Payment To</Col>
                <Col md={4}><SelectField
                    value={paymentTo}
                    onChange={onPaymentToChange}
                    floatingLabelText="Payment To"
                    >
                    {paymentTos}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Agenda Payment</Col>
                <Col md={4}><SelectField
                    value={agendaPayment}
                    onChange={onAgendaPaymentChange}
                    floatingLabelText="Agenda Payment"
                    >
                    {agendaPayments}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Handling Change</Col>
                <Col md={4}><TextField
                    name="handlingChange"
                    value={handlingChange}
                    onChange={onTextChange}
                    hintText="Ex: 0"
                    floatingLabelText="Handling Change"
                    /></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Dealers Visibility</Col>
                <Col md={4}><SelectField
                    value={dealersVisibility}
                    onChange={onDealersVisibilityChange}
                    floatingLabelText="Dealers Visibility"
                    >
                    {dealersVisibilities}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Volume Discount Type</Col>
                <Col md={4}><SelectField
                    value={volumeDiscountType}
                    onChange={onVolumeDiscountTypeChange}
                    floatingLabelText="Volume Discount Type"
                    >
                    {volumeDiscountTypes}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Discount Unit</Col>
                <Col md={4}><SelectField
                    value={discountUnit}
                    onChange={onDiscountUnitChange}
                    floatingLabelText="Discount Unit"
                    >
                    {discountUnits}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Combinability</Col>
                <Col md={4}><SelectField
                    value={combinability}
                    onChange={onCombinabilityChange}
                    floatingLabelText="Combinability"
                    >
                    {combinabilities}
                </SelectField></Col>
            </Row>
        </Grid>
    );
};

BasicsForm.propTypes = {
    rfoNumber: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    agreementName: PropTypes.string.isRequired,
    agreementDescription: PropTypes.string,
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    fundingMethod: PropTypes.string,
    paymentTo: PropTypes.string,
    agendaPayment: PropTypes.string,
    handlingChange: PropTypes.string,
    dealersVisibility: PropTypes.string,
    volumeDiscountType: PropTypes.string,
    discountUnit: PropTypes.string,
    combinability: PropTypes.string,
    onTextChange: PropTypes.func.isRequired,
    onStartDateChange: PropTypes.func.isRequired,
    onEndDateChange: PropTypes.func.isRequired,
    onSignedAgreementChange: PropTypes.func.isRequired,
    onFundingMethodChange: PropTypes.func.isRequired,
    onPaymentToChange: PropTypes.func.isRequired,
    onAgendaPaymentChange: PropTypes.func.isRequired,
    onDealersVisibilityChange: PropTypes.func.isRequired,
    onVolumeDiscountTypeChange: PropTypes.func.isRequired,
    onDiscountUnitChange: PropTypes.func.isRequired,
    onCombinabilityChange: PropTypes.func.isRequired
};

BasicsForm.defaultProps = {
    rfoNumber: "",
    customerName: "",
    agreementName: "",
    agreementDescription: "",
    startDate: {},
    endDate: {},
    fundingMethod: "",
    paymentTo: "",
    agendaPayment: "",
    handlingChange: "",
    dealersVisibility: "",
    volumeDiscountType: "",
    discountUnit: "",
    combinability: "",
    onTextChange: (e) => e,
    onStartDateChange: (e) => e,
    onEndDateChange: (e) => e,
    onSignedAgreementChange: (e) => e,
    onFundingMethodChange: (e) => e,
    onPaymentToChange: (e) => e,
    onAgendaPaymentChange: (e) => e,
    onDealersVisibilityChange: (e) => e,
    onVolumeDiscountTypeChange: (e) => e,
    onDiscountUnitChange: (e) => e,
    onCombinabilityChange: (e) => e
};

export default BasicsForm;