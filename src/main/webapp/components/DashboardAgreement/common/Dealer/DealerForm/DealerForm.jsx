import React, {PropTypes} from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const DealerForm = ({
    dealerCode,
    dealerName,
    onTextChange,
    onButtonSearchClick
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
                <Col md={4}><RaisedButton 
                    label="Search" 
                    primary={true}
                    onClick={onButtonSearchClick} /></Col>
            </Row>
        </Grid>
    );
};

DealerForm.propTypes = {
    dealerCode: PropTypes.string.isRequired,
    dealerName: PropTypes.string.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onButtonSearchClick: PropTypes.func.isRequired
};

DealerForm.defaultProps = {
    dealerCode: "",
    dealerName: "",
    onTextChange: (e) => e,
    onButtonSearchClick: (e) => e
};

export default DealerForm;