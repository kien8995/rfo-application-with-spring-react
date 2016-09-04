import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";

const ConfirmationForm = ({
    customer,
    basics
}) => {
    let rfoNumber = customer.rfoNumber;
    let customerName = customer.name;
    let startEnd = `${basics.startDate} - ${basics.endDate}`;
    let status = basics.status;
    return (
        <Grid>
            <Row middle="md">
                <Col md={2}>RFO Number</Col>
                <Col md={4}>{rfoNumber}</Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Customer Name</Col>
                <Col md={4}>{customerName}</Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Start - End</Col>
                <Col md={4}>{startEnd}</Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Status</Col>
                <Col md={4}>{status}</Col>
            </Row>
        </Grid>
    );
};

ConfirmationForm.propTypes = {
    customer: PropTypes.object.isRequired,
    basics: PropTypes.object.isRequired
};

ConfirmationForm.defaultProps = {
    customer: {},
    basics: {}
};

export default ConfirmationForm;