import React, {Component} from "react";

import {VolumeForm} from "./VolumeForm";
import {VolumeTable} from "./VolumeTable";
import {VolumeSelectField} from "./VolumeSelectField";

class Volume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bandingValueFrom: "",
            bandingValueTo: "",
            bandingTableData: [],
            triggerCredit: "",
            payableTo: ""
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onTriggerCreditChange = this.onTriggerCreditChange.bind(this);
        this.onPayableToChange = this.onPayableToChange.bind(this);
        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    onTextChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);

        this.props.onVolumeChange(this.state);
    }

    onTriggerCreditChange(event, index, value) {
        this.setState({ triggerCredit: value });

        this.props.onVolumeChange(this.state);
    }

    onPayableToChange(event, index, value) {
        this.setState({ payableTo: value });

        this.props.onVolumeChange(this.state);
    }

    onAddButtonClick() {
        if (this.state.bandingValueFrom !== "") {
            let bandingTableData = this.state.bandingTableData;
            bandingTableData.push(`${this.state.bandingValueFrom} - ${this.state.bandingValueTo}`);
            this.state.bandingTableData = bandingTableData;

            this.props.onVolumeChange(this.state);
        }
    }

    render() {
        return (
            <div>
                <VolumeForm
                    rfoNumber={this.props.rfoNumber}
                    customerName={this.props.customerName}
                    bandingValueFrom={this.state.bandingValueFrom}
                    bandingValueTo={this.state.bandingValueTo}
                    onTextChange={this.onTextChange}
                    onAddButtonClick={this.onAddButtonClick} />

                <VolumeTable
                    bandingTableData={this.state.bandingTableData} />

                <VolumeSelectField
                    triggerCredit={this.state.triggerCredit}
                    payableTo={this.state.payableTo}
                    onTriggerCreditChange={this.onTriggerCreditChange}
                    onPayableToChange={this.onPayableToChange} />
            </div>
        );
    }
}

Volume.defaultProps = {
    rfoNumber: "",
    customerName: ""
};

export default Volume;