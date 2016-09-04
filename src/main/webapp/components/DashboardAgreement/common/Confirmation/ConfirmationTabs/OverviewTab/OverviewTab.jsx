import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";

const OverviewTab = ({
    customer,
    basics
}) => {
    let businessArea = customer.businessArea;
    let agreementDetails = basics.agreementDescription;
    let createdDate = new Date().toString();
    let signedAgreement = basics.signedAgreement;
    let paymentTo = basics.paymentTo;
    let handlingChange = basics.handlingChange;
    let agendaPayment = basics.agendaPayment;

    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>Business Area</Col>
                    <Col md={4}>{businessArea}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agreement Details</Col>
                    <Col md={4}>{agreementDetails}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Created Date</Col>
                    <Col md={4}>{createdDate}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Authorised By</Col>
                    <Col md={4}>{""}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Authorised Date</Col>
                    <Col md={4}>{""}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Signed agreement required?</Col>
                    <Col md={4}>{signedAgreement}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Payment To</Col>
                    <Col md={4}>{paymentTo}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Handling Charge</Col>
                    <Col md={4}>{handlingChange}</Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Agenda Payment</Col>
                    <Col md={4}>{agendaPayment}</Col>
                </Row>
            </Grid>
        </div>
    );
};

OverviewTab.propTypes = {
    customer: PropTypes.object.isRequired,
    basics: PropTypes.object.isRequired
};

OverviewTab.defaultProps = {
    customer: {},
    basics: {}
};

export default OverviewTab;