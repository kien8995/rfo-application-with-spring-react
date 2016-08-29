import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";

const MiscText = ({
    handleTextChange,
    comments,
    supportJustification
}) => {
    return (
        <div>
            <Grid>
                <Row middle="md">
                    <Col md={2}>Credit Note Commments</Col>
                    <Col md={4}><TextField
                        name="comments"
                        value={comments}
                        onChange={handleTextChange}
                        hintText="Comment..."
                        floatingLabelText="Credit Note Commments"
                        multiLine={true}
                        rows={3}
                        /></Col>
                </Row>
                <Row middle="md">
                    <Col md={2}>Support Justification (Internal use only)</Col>
                    <Col md={4}><TextField
                        name="supportJustification"
                        value={supportJustification}
                        onChange={handleTextChange}
                        floatingLabelText="Support Justification"
                        multiLine={true}
                        rows={3}
                        /></Col>
                </Row>
            </Grid>
        </div>
    );
};

export default MiscText;