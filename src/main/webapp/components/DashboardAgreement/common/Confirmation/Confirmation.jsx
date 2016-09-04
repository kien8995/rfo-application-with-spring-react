import React, {PropTypes} from "react";

import {ConfirmationForm} from "./ConfirmationForm";
import {ConfirmationTabs} from "./ConfirmationTabs";

const Confirmation = ({
    customer,
    basics,
    confirmation,
    onConfirmationChange
}) => {

    let onTabChange = (value) => {
        onConfirmationChange({ tabIndex: value });
    };

    return (
        <div>
            <ConfirmationForm
                customer={customer}
                basics={basics} />

            <ConfirmationTabs
                customer={customer}
                basics={basics}
                tabIndex={confirmation.tabIndex}
                onTabChange={onTabChange} />
        </div>
    );
};

Confirmation.propTypes = {
    customer: PropTypes.object.isRequired,
    basics: PropTypes.object.isRequired,
    confirmation: PropTypes.object.isRequired,
    onConfirmationChange: PropTypes.func.isRequired
};

export default Confirmation;