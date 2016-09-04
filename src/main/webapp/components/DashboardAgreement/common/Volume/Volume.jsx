import React, {PropTypes} from "react";

import {VolumeForm} from "./VolumeForm";
import {VolumeTable} from "./VolumeTable";
import {VolumeSelectField} from "./VolumeSelectField";

const Volume = ({
    customer,
    volume,
    onVolumeChange
}) => {

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;
        onVolumeChange(object);
    };

    let onTriggerCreditChange = (event, index, value) => {
        onVolumeChange({ triggerCredit: value });
    };

    let onPayableToChange = (event, index, value) => {
        onVolumeChange({ payableTo: value });
    };

    let onAddButtonClick = () => {
        if (volume.bandingValueFrom !== "") {
            let bandingTableData = volume.bandingTableData;
            bandingTableData.push(`${volume.bandingValueFrom} - ${volume.bandingValueTo}`);
            volume.bandingTableData = bandingTableData;

            onVolumeChange({ bandingTableData: bandingTableData });
        }
    };

    return (
        <div>
            <VolumeForm
                rfoNumber={customer.rfoNumber}
                customerName={customer.name}
                bandingValueFrom={volume.bandingValueFrom}
                bandingValueTo={volume.bandingValueTo}
                onTextChange={onTextChange}
                onAddButtonClick={onAddButtonClick} />

            <VolumeTable
                bandingTableData={volume.bandingTableData} />

            <VolumeSelectField
                triggerCredit={volume.triggerCredit}
                payableTo={volume.payableTo}
                onTriggerCreditChange={onTriggerCreditChange}
                onPayableToChange={onPayableToChange} />
        </div>
    );
};

Volume.propTypes = {
    customer: PropTypes.object.isRequired,
    volume: PropTypes.object.isRequired,
    onVolumeChange: PropTypes.func.isRequired
};

export default Volume;