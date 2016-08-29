import React from "react";
import {Grid, Row, Col} from "react-flexbox-grid";
import TextField from "material-ui/TextField";
import {Tabs, Tab} from "material-ui/Tabs";


const Confirmation = ({
    rfoNumber,
    customerName,
    startEnd,
    status,
    tabIndex,
    handleTabChange
}) => {
    return (
        <div>
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

            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                >
                <Tab label="Overview" value={0} >
                    <div>
                        <p>
                            Tabs are also controllable if you want to programmatically pass them their values.
                            This allows for more functionality in Tabs such as not
                            having any Tab selected or assigning them different values.
                        </p>
                    </div>
                </Tab>
                <Tab label="Dealers" value={1}>
                    <div>
                        <p>
                            This is another example of a controllable tab.Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
                <Tab label="Model Support" value={2}>
                    <div>
                        <p>
                            This is another example of a controllable tab.Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
                <Tab label="Misc Text" value={3}>
                    <div>
                        <p>
                            This is another example of a controllable tab.Remember, if you
                            use controllable Tabs, you need to give all of your tabs values or else
                            you wont be able to select them.
                        </p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Confirmation;