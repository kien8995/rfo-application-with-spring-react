import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const VolumeForm = ({
    rfoNumber,
    customerName,
    bandingValueFrom,
    bandingValueTo,
    onTextChange,
    onAddButtonClick
}) => {
    return (
        <Grid>
            <Row middle="md">
                <Col md={2}>RFO Number</Col>
                <Col md={4}>{rfoNumber}</Col>
            </Row>
            <br/>
            <br/>
            <Row middle="md">
                <Col md={2}>Customer Name</Col>
                <Col md={4}>{customerName}</Col>
            </Row>
            <br/>
            <Row middle="md">
                <Col md={2}>Banding Value From</Col>
                <Col md={4}><TextField
                    name="bandingValueFrom"
                    value={bandingValueFrom}
                    onChange={onTextChange}
                    hintText="Ex: 100"
                    floatingLabelText="Banding Value From"
                    /></Col>
            </Row>
            <Row middle="md">
                <Col md={2}>Banding Value To</Col>
                <Col md={4}><TextField
                    name="bandingValueTo"
                    value={bandingValueTo}
                    onChange={onTextChange}
                    hintText="Ex: 100"
                    floatingLabelText="Banding Value To"
                    /></Col>
            </Row>
            <br/>
            <Row middle="md">
                <Col md={2}></Col>
                <Col md={4}><RaisedButton label="Add" primary={true} onClick={onAddButtonClick}/></Col>
            </Row>
        </Grid>
    );
};

VolumeForm.propTypes = {
    rfoNumber: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    bandingValueFrom: PropTypes.string.isRequired,
    bandingValueTo: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onAddButtonClick: PropTypes.func.isRequired
};

VolumeForm.defaultProps = {
    rfoNumber: "",
    customerName: "",
    bandingValueFrom: "",
    bandingValueTo: "",
    onTextChange: (e) => e,
    onAddButtonClick: (e) => e
};

export default VolumeForm;