import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const DealersForm = ({
    dealerCode,
    dealerName,
    onTextChange
}) => {
    return (
        <Grid>
            <Row middle="md">
                <Col md={2}>Dealer Code</Col>
                <Col md={4}><TextField
                    name="dealerCode"
                    value={dealerCode}
                    onChange={onTextChange}
                    hintText="Ex: WES498"
                    floatingLabelText="Dealer Code"
                    /></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Dealer Name</Col>
                <Col md={4}><TextField
                    name="dealerName"
                    value={dealerName}
                    onChange={onTextChange}
                    hintText="Ex: WES498"
                    floatingLabelText="Dealer Name"
                    /></Col>
            </Row>
            <Row middle="md">
                <Col md={2}></Col>
                <Col md={4}><RaisedButton label="Search" primary={true} /></Col>
            </Row>
        </Grid>
    );
};

export default DealersForm;