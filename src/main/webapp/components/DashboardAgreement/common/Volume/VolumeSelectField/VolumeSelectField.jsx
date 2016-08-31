import React, {Component} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const items = [
    <MenuItem key={1} value={"Never"} primaryText="Never" />,
    <MenuItem key={2} value={"Every Night"} primaryText="Every Night" />,
    <MenuItem key={3} value={"Weeknights"} primaryText="Weeknights" />,
    <MenuItem key={4} value={"Weekends"} primaryText="Weekends" />,
    <MenuItem key={5} value={"Weekly"} primaryText="Weekly" />,
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
                    {items}
                </SelectField></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Payable To</Col>
                <Col md={4}><SelectField
                    value={payableTo}
                    onChange={onPayableToChange}
                    floatingLabelText="Payable To"
                    >
                    {items}
                </SelectField></Col>
            </Row>
        </Grid>
    );
};

export default VolumeSelectField;