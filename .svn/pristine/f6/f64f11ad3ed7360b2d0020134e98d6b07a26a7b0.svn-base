import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {BasicsForm} from "./BasicsForm";

class Basics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            agreementName: "",
            agreementDescription: "",
            startDate: null,
            endDate: null,
            signedAgreement: "",
            fundingMethod: "",
            paymentTo: "",
            agendaPayment: "",
            handlingChange: "",
            dealersVisibility: "",
            volumeDiscountType: "",
            discountUnit: "",
            combinability: "",
            status: "Draft"
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onStartDateChange = this.onStartDateChange.bind(this);
        this.onEndDateChange = this.onEndDateChange.bind(this);
        this.onSignedAgreementChange = this.onSignedAgreementChange.bind(this);
        this.onFundingMethodChange = this.onFundingMethodChange.bind(this);
        this.onPaymentToChange = this.onPaymentToChange.bind(this);
        this.onAgendaPaymentChange = this.onAgendaPaymentChange.bind(this);
        this.onDealersVisibilityChange = this.onDealersVisibilityChange.bind(this);
        this.onVolumeDiscountTypeChange = this.onVolumeDiscountTypeChange.bind(this);
        this.onDiscountUnitChange = this.onDiscountUnitChange.bind(this);
        this.onCombinabilityChange = this.onCombinabilityChange.bind(this);
    }

    onTextChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);

        this.props.onBasicsChange(this.state);
    }

    onStartDateChange(event, date) {
        this.setState({ startDate: date });

        this.props.onBasicsChange(this.state);
    }

    onEndDateChange(event, date) {
        this.setState({ endDate: date });

        this.props.onBasicsChange(this.state);
    }

    onSignedAgreementChange(event, value) {
        this.setState({ signedAgreement: value });

        this.props.onBasicsChange(this.state);
    }

    onFundingMethodChange(event, index, value) {
        this.setState({ fundingMethod: value });

        this.props.onBasicsChange(this.state);
    }

    onPaymentToChange(event, index, value) {
        this.setState({ paymentTo: value });

        this.props.onBasicsChange(this.state);
    }

    onAgendaPaymentChange(event, index, value) {
        this.setState({ agendaPayment: value });

        this.props.onBasicsChange(this.state);
    }

    onDealersVisibilityChange(event, index, value) {
        this.setState({ dealersVisibility: value });

        this.props.onBasicsChange(this.state);
    }

    onVolumeDiscountTypeChange(event, index, value) {
        this.setState({ volumeDiscountType: value });

        this.props.onBasicsChange(this.state);
    }

    onDiscountUnitChange(event, index, value) {
        this.setState({ discountUnit: value });

        this.props.onBasicsChange(this.state);
    }

    onCombinabilityChange(event, index, value) {
        this.setState({ combinability: value });

        this.props.onBasicsChange(this.state);
    }

    render() {
        return (
            <div>
                <BasicsForm
                    rfoNumber={this.props.rfoNumber}
                    customerName={this.props.customerName}
                    agreementName={this.state.agreementName}
                    agreementDescription={this.state.agreementDescription}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    fundingMethod={this.state.fundingMethod}
                    paymentTo={this.state.paymentTo}
                    agendaPayment={this.state.agendaPayment}
                    handlingChange={this.state.handlingChange}
                    dealersVisibility={this.state.dealersVisibility}
                    volumeDiscountType={this.state.volumeDiscountType}
                    discountUnit={this.state.discountUnit}
                    combinability={this.state.combinability}
                    onTextChange={this.onTextChange}
                    onStartDateChange={this.onStartDateChange}
                    onEndDateChange={this.onEndDateChange}
                    onSignedAgreementChange={this.onSignedAgreementChange}
                    onFundingMethodChange={this.onFundingMethodChange}
                    onPaymentToChange={this.onPaymentToChange}
                    onAgendaPaymentChange={this.onAgendaPaymentChange}
                    onDealersVisibilityChange={this.onDealersVisibilityChange}
                    onVolumeDiscountTypeChange={this.onVolumeDiscountTypeChange}
                    onDiscountUnitChange={this.onDiscountUnitChange}
                    onCombinabilityChange={this.onCombinabilityChange} />
            </div>
        );
    }
}

export default Basics;