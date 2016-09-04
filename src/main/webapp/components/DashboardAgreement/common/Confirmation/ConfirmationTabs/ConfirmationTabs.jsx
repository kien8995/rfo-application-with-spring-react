import React, {PropTypes} from "react";
import {Tabs, Tab} from "material-ui/Tabs";

import {OverviewTab} from "./OverviewTab";
import {DealersTab} from "./DealersTab";
import {ModelSupportTab} from "./ModelSupportTab";
import {MiscTextTab} from "./MiscTextTab";

const ConfirmationTabs = ({
    customer,
    basics,
    tabIndex,
    onTabChange
}) => {
    return (
        <Tabs
            value={tabIndex}
            onChange={onTabChange}
            >
            <Tab label="Overview" value={0} >
                <OverviewTab
                    customer={customer}
                    basics={basics} />
            </Tab>
            <Tab label="Dealers" value={1}>
                <DealersTab />
            </Tab>
            <Tab label="Model Support" value={2}>
                <ModelSupportTab />
            </Tab>
            <Tab label="Misc Text" value={3}>
                <MiscTextTab />
            </Tab>
        </Tabs>
    );
};

ConfirmationTabs.propTypes = {
    customer: PropTypes.object.isRequired,
    basics: PropTypes.object.isRequired
};

ConfirmationTabs.defaultProps = {
    customer: {},
    basics: {}
};
 
export default ConfirmationTabs;