import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const triggerCredits = [
    <MenuItem key={1} value={"EndOfCalendarYear"} primaryText="End of calendar year" />
];

const payableTos = [
    <MenuItem key={1} value={"Dealer"} primaryText="Dealer" />
];

const VolumeSelectField = ({
    triggerCredit,
    payableTo,
    onTriggerCreditChange,
    onPayableToChange
}) => {
    return (
        <Grid>
            <Row middle="md">
                <Col md={2}>Trigger Credit</Col>
                <Col md={4}><SelectField
                    value={triggerCredit}
                    onChange={onTriggerCreditChange}
                    floatingLabelText="Trigger Credit"
                    >
                    {triggerCredits}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Payable To</Col>
                <Col md={4}><SelectField
                    value={payableTo}
                    onChange={onPayableToChange}
                    floatingLabelText="Payable To"
                    >
                    {payableTos}
                </SelectField></Col>
            </Row>
        </Grid>
    );
};

VolumeSelectField.propTypes = {
    triggerCredit: PropTypes.string.isRequired,
    payableTo: PropTypes.string.isRequired,
    onTriggerCreditChange: PropTypes.func.isRequired,
    onPayableToChange: PropTypes.func.isRequired
};

VolumeSelectField.defaultProps = {
    triggerCredit: "",
    payableTo: "",
    onTriggerCreditChange: (e) => e,
    onPayableToChange: (e) => e
};

export default VolumeSelectField;