import React, {PropTypes} from "react";

import {MiscTextForm} from "./MiscTextForm";

const MiscText = ({
    miscText,
    onMiscTextChange
}) => {

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;
        onMiscTextChange(object);
    };

    return (
        <div>
            <MiscTextForm
                comments={miscText.comments}
                supportJustification={miscText.supportJustification}
                onTextChange={onTextChange} />
        </div>
    );
};

MiscText.propTypes = {
    onMiscTextChange: PropTypes.func.isRequired
};

export default MiscText;