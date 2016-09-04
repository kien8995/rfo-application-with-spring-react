import React, {PropTypes} from "react";

import {BasicsForm} from "./BasicsForm";

const Basics = ({
    customer,
    basics,
    onBasicsChange
}) => {

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;
        onBasicsChange(object);
    };

    let onStartDateChange = (event, date) => {
        onBasicsChange({ startDate: date });
    };

    let onEndDateChange = (event, date) => {
        onBasicsChange({ endDate: date });
    };

    let onSignedAgreementChange = (event, value) => {
        onBasicsChange({ signedAgreement: value });
    };

    let onFundingMethodChange = (event, index, value) => {
        onBasicsChange({ fundingMethod: value });
    };

    let onPaymentToChange = (event, index, value) => {
        onBasicsChange({ paymentTo: value });
    };

    let onAgendaPaymentChange = (event, index, value) => {
        onBasicsChange({ agendaPayment: value });
    };

    let onDealersVisibilityChange = (event, index, value) => {
        onBasicsChange({ dealersVisibility: value });
    };

    let onVolumeDiscountTypeChange = (event, index, value) => {
        onBasicsChange({ volumeDiscountType: value });
    };

    let onDiscountUnitChange = (event, index, value) => {
        onBasicsChange({ discountUnit: value });
    };

    let onCombinabilityChange = (event, index, value) => {
        onBasicsChange({ combinability: value });
    };

    return (
        <div>
            <BasicsForm
                rfoNumber={customer.rfoNumber}
                customerName={customer.name}
                agreementName={basics.agreementName}
                agreementDescription={basics.agreementDescription}
                startDate={basics.startDate}
                endDate={basics.endDate}
                fundingMethod={basics.fundingMethod}
                paymentTo={basics.paymentTo}
                agendaPayment={basics.agendaPayment}
                handlingChange={basics.handlingChange}
                dealersVisibility={basics.dealersVisibility}
                volumeDiscountType={basics.volumeDiscountType}
                discountUnit={basics.discountUnit}
                combinability={basics.combinability}
                onTextChange={onTextChange}
                onStartDateChange={onStartDateChange}
                onEndDateChange={onEndDateChange}
                onSignedAgreementChange={onSignedAgreementChange}
                onFundingMethodChange={onFundingMethodChange}
                onPaymentToChange={onPaymentToChange}
                onAgendaPaymentChange={onAgendaPaymentChange}
                onDealersVisibilityChange={onDealersVisibilityChange}
                onVolumeDiscountTypeChange={onVolumeDiscountTypeChange}
                onDiscountUnitChange={onDiscountUnitChange}
                onCombinabilityChange={onCombinabilityChange} />
        </div>
    );
};

Basics.propTypes = {
    customer: PropTypes.object.isRequired,
    basics: PropTypes.object.isRequired,
    onBasicsChange: PropTypes.func.isRequired
};

export default Basics;