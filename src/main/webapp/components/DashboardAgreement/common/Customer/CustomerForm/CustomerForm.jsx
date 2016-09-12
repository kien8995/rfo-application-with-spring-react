import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

const customerTypes = [
    <MenuItem key={1} value={"Fleet"} primaryText="Fleet" />,
    <MenuItem key={2} value={"Leasing"} primaryText="Leasing" />
];

const businessAreas = [
    <MenuItem key={1} value={"0 - 100"} primaryText="0 - 100" />,
    <MenuItem key={2} value={"100 +"} primaryText="100 +" />
];

const regions = [
    <MenuItem key={1} value={"Eastern"} primaryText="Eastern" />,
    <MenuItem key={3} value={"Western"} primaryText="Western" />,
    <MenuItem key={4} value={"Southern"} primaryText="Southern" />,
    <MenuItem key={5} value={"Northern"} primaryText="Northern" />,
];

const CustomerForm = ({
    rfoNumber,
    rfoName,
    postcode,
    customerType,
    businessArea,
    region,
    onTextChange,
    onCustomerTypeChange,
    onBusinessAreaChange,
    onRegionChange,
    onButtonSearchClick
}) => {
    return (
        <Grid>
            <Row middle="md">
                <Col md={2}>RFO Number</Col>
                <Col md={4}><TextField
                    name="rfoNumber"
                    value={rfoNumber}
                    onChange={onTextChange}
                    hintText="Ex: S00123"
                    floatingLabelText="RFO Number"
                    /></Col>
            </Row>
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
                    name="rfoName"
                    value={rfoName}
                    onChange={onTextChange}
                    hintText="Ex: Bank of England"
                    floatingLabelText="Name"
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
                <Col md={2}>Business Area</Col>
                <Col md={4}><SelectField
                    value={businessArea}
                    onChange={onBusinessAreaChange}
                    floatingLabelText="Business Area"
                    >
                    {businessAreas}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Region</Col>
                <Col md={4}><SelectField
                    value={region}
                    onChange={onRegionChange}
                    floatingLabelText="Region"
                    >
                    {regions}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}></Col>
                <Col md={4}><RaisedButton
                    label="Search"
                    primary={true}
                    onClick={onButtonSearchClick} /></Col>
            </Row>
        </Grid>
    );
};

CustomerForm.propTypes = {
    rfoNumber: PropTypes.string.isRequired,
    rfoName: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    customerType: PropTypes.string.isRequired,
    businessArea: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onCustomerTypeChange: PropTypes.func.isRequired,
    onBusinessAreaChange: PropTypes.func.isRequired,
    onRegionChange: PropTypes.func.isRequired,
    onButtonSearchClick: PropTypes.func.isRequired
};

CustomerForm.defaultProps = {
    rfoNumber: "",
    rfoName: "",
    postcode: "",
    customerType: "",
    businessArea: "",
    region: "",
    onTextChange: (e) => e,
    onCustomerTypeChange: (e) => e,
    onBusinessAreaChange: (e) => e,
    onRegionChange: (e) => e,
    onButtonSearchClick: (e) => e
};

export default CustomerForm;