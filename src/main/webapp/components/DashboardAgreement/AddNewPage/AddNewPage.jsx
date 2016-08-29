import React, {Component} from "react";
import {
    Step,
    Stepper,
    StepLabel,
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ExpandTransition from "material-ui/internal/ExpandTransition";
import TextField from "material-ui/TextField";

import {Basics} from "./Basics";
import {Confirmation} from "./Confirmation";
import {Customer} from "./Customer";
import {Dealers} from "./Dealers";
import {MiscText} from "./MiscText";
import {ModelSupport} from "./ModelSupport";
import {Volume} from "./Volume";

let customerTableData = [
    {
        id: 1,
        rfoNumber: "S00428",
        name: "Bank of England",
        customerType: "Fleet",
        postcode: "RG21 3RF",
        businessArea: "100 +",
        region: "Eastern"
    },
    {
        id: 2,
        rfoNumber: "S00428",
        name: "Bank of England",
        customerType: "Fleet",
        postcode: "RG21 3RF",
        businessArea: "100 +",
        region: "Eastern"
    },
    {
        id: 3,
        rfoNumber: "S00428",
        name: "Bank of England",
        customerType: "Fleet",
        postcode: "RG21 3RF",
        businessArea: "100 +",
        region: "Eastern"
    },
    {
        id: 4,
        rfoNumber: "S00428",
        name: "Bank of England",
        customerType: "Fleet",
        postcode: "RG21 3RF",
        businessArea: "100 +",
        region: "Eastern"
    },
    {
        id: 5,
        rfoNumber: "S00428",
        name: "Bank of England",
        customerType: "Fleet",
        postcode: "RG21 3RF",
        businessArea: "100 +",
        region: "Eastern"
    }
];

let dealerTableData = [
    {
        code: "WES489",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES410",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES411",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES412",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES413",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
];


class AddNewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
            customer: {
                rfoNumber: "",
                name: "",
                postcode: "",
                customerType: null,
                businessArea: null,
                region: null,
                selectedRow: null
            },
            basics: {
                agreementName: "",
                agreementDescription: "",
                startDate: null,
                endDate: null,
                signedAgreement: "",
                fundingMethod: null,
                paymentTo: null,
                agendaPayment: null,
                handlingChange: "",
                dealersVisibility: null,
                volumeDiscountType: null,
                discountUnit: null,
                combinability: null
            },
            dealers: {
                dealerCode: "",
                dealerName: "",
                applicableDealer: []
            },
            volume: {
                bandingValueFrom: "",
                bandingValueTo: "",
                bandingTableData: [],
                triggerCredit: null,
                payableTo: null
            },
            miscText: {
                comments: "",
                supportJustification: ""
            },
            confirmation: {
                tabIndex: 0
            }
        };

        // Customer
        this.handleCustomerTextChange = this.handleCustomerTextChange.bind(this);
        this.handleCustomerTypeChange = this.handleCustomerTypeChange.bind(this);
        this.handleBusinessAreaChange = this.handleBusinessAreaChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleRowSelection = this.handleRowSelection.bind(this);
        // Customer

        //Basics
        this.handleBasicsTextChange = this.handleBasicsTextChange.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleSignedAgreementChange = this.handleSignedAgreementChange.bind(this);
        this.handleFundingMethodChange = this.handleFundingMethodChange.bind(this);
        this.handlePaymentToChange = this.handlePaymentToChange.bind(this);
        this.handleAgendaPaymentChange = this.handleAgendaPaymentChange.bind(this);
        this.handleDealersVisibilityChange = this.handleDealersVisibilityChange.bind(this);
        this.handleVolumeDiscountTypeChange = this.handleVolumeDiscountTypeChange.bind(this);
        this.handleDiscountUnitChange = this.handleDiscountUnitChange.bind(this);
        this.handleCombinabilityChange = this.handleCombinabilityChange.bind(this);
        //Basics

        //Dealers
        this.handleDealerTableDataRowSelection = this.handleDealerTableDataRowSelection.bind(this);
        this.handleApplicableDealerRowSelection = this.handleApplicableDealerRowSelection.bind(this);
        //Dealers

        //Volume
        this.handleVolumeTextChange = this.handleVolumeTextChange.bind(this);
        this.handleTriggerCreditChange = this.handleTriggerCreditChange.bind(this);
        this.handlePayableToChange = this.handlePayableToChange.bind(this);
        this.onAddBandingValue = this.onAddBandingValue.bind(this);
        //Volume

        //MiscText
        this.handleMiscTextChange = this.handleMiscTextChange.bind(this);
        //MiscText

        //Confirmation
        this.handleTabChange = this.handleTabChange.bind(this);
        //Confirmation

        //-- Stepper --
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        //-- Stepper --
    }

    handleCustomerTextChange(event) {
        let customer = this.state.customer;
        customer[event.target.name] = event.target.value;
        this.setState({ customer });
    }

    //Customer
    handleCustomerTypeChange(event, index, value) {
        let customer = this.state.customer;
        customer["customerType"] = value;
        this.setState({ customer });
    }

    handleBusinessAreaChange(event, index, value) {
        let customer = this.state.customer;
        customer["businessArea"] = value;
        this.setState({ customer });
    }

    handleRegionChange(event, index, value) {
        let customer = this.state.customer;
        customer["region"] = value;
        this.setState({ customer });
    }

    handleRowSelection(key) {
        let customer = this.state.customer;
        if (!this.state.customer["selectedRow"]) {

            for (var i = 0; i < customerTableData.length; i++) {
                customerTableData[i].selected = false;
            }
            console.log(key);
            customerTableData[key].selected = true;
            customer["selectedRow"] = customerTableData[key];
            this.setState({ customer: Object.assign({}, customer, { selectedRow: customerTableData[key] }) });
        } else {
            customerTableData[key].selected = false;
            this.setState({ customer: Object.assign({}, customer, { selectedRow: null }) });
        }

        console.log(this.state.customer["selectedRow"]);
    }
    //Customer

    //Basics

    handleBasicsTextChange(event) {
        let basics = this.state.basics;
        basics[event.target.name] = event.target.value;
        this.setState({ basics });
    }

    handleStartDateChange(event, date) {
        let basics = this.state.basics;
        basics["startDate"] = date;
        this.setState({ basics });
    }

    handleEndDateChange(event, date) {
        let basics = this.state.basics;
        basics["endDate"] = date;
        this.setState({ basics });
    }

    handleSignedAgreementChange(event, value) {
        let basics = this.state.basics;
        basics["signedAgreement"] = value;
        this.setState({ basics });
    }

    handleFundingMethodChange(event, index, value) {
        let basics = this.state.basics;
        basics["fundingMethod"] = value;
        this.setState({ basics });
    }

    handlePaymentToChange(event, index, value) {
        let basics = this.state.basics;
        basics["paymentTo"] = value;
        this.setState({ basics });
    }

    handleAgendaPaymentChange(event, index, value) {
        let basics = this.state.basics;
        basics["agendaPayment"] = value;
        this.setState({ basics });
    }

    handleDealersVisibilityChange(event, index, value) {
        let basics = this.state.basics;
        basics["dealersVisibility"] = value;
        this.setState({ basics });
    }

    handleVolumeDiscountTypeChange(event, index, value) {
        let basics = this.state.basics;
        basics["volumeDiscountType"] = value;
        this.setState({ basics });
    }

    handleDiscountUnitChange(event, index, value) {
        let basics = this.state.basics;
        basics["discountUnit"] = value;
        this.setState({ basics });
    }

    handleCombinabilityChange(event, index, value) {
        let basics = this.state.basics;
        basics["combinability"] = value;
        this.setState({ basics });
    }

    //Basics

    //Dealers
    handleDealerTableDataRowSelection(key) {
        let applicableDealer = this.state.dealers.applicableDealer;

        applicableDealer.push(dealerTableData[key]);

        dealerTableData.splice(key, 1);

        this.setState({ applicableDealer });
    }

    handleApplicableDealerRowSelection(key) {
        let applicableDealer = this.state.dealers.applicableDealer;

        dealerTableData.push(applicableDealer[key]);

        applicableDealer.splice(key, 1);

        this.setState({ applicableDealer });
    }
    //Dealers

    //Volume
    handleVolumeTextChange(event) {
        let volume = this.state.volume;
        volume[event.target.name] = event.target.value;
        this.setState({ volume });
    }

    handleTriggerCreditChange(event, index, value) {
        let volume = this.state.volume;
        volume["triggerCredit"] = value;
        this.setState({ volume });
    }

    handlePayableToChange(event, index, value) {
        let volume = this.state.volume;
        volume["payableTo"] = value;
        this.setState({ volume });
    }

    onAddBandingValue() {
        if (this.state.volume.payableTo !== "") {
            let volume = this.state.volume;
            volume.bandingTableData.push(`${this.state.volume.bandingValueFrom} - ${this.state.volume.bandingValueTo}`);
            this.setState({ volume });
        }
    }
    //Volume

    //MiscText
    handleMiscTextChange(event) {
        let miscText = this.state.miscText;
        miscText[event.target.name] = event.target.value;
        this.setState({ miscText });
    }
    //MiscText

    //Confirmation
    handleTabChange(value) {
        let confirmation = this.state.confirmation;
        confirmation.tabIndex = value;
        this.setState({ confirmation });
    }
    //Confirmation

    //-- Stepper --

    dummyAsync(cb) {
        this.setState({ loading: true }, () => {
            this.asyncTimer = setTimeout(cb, 500);
        });
    }

    handleNext() {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex + 1,
                finished: stepIndex >= 6
            }));
        }
    }

    handlePrev() {
        const {stepIndex} = this.state;
        if (!this.state.loading) {
            this.dummyAsync(() => this.setState({
                loading: false,
                stepIndex: stepIndex - 1,
            }));
        }
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <Customer
                        handleTextChange={this.handleCustomerTextChange}
                        rfoNumber={this.state.customer.rfoNumber}
                        name={this.state.customer.name}
                        postcode={this.state.customer.postcode}
                        customerType={this.state.customer.customerType}
                        handleCustomerTypeChange={this.handleCustomerTypeChange}
                        businessArea={this.state.customer.businessArea}
                        handleBusinessAreaChange={this.handleBusinessAreaChange}
                        region={this.state.customer.region}
                        handleRegionChange={this.handleRegionChange}
                        tableData={customerTableData}
                        handleRowSelection={this.handleRowSelection}
                        />
                );
            case 1:
                return (
                    <Basics
                        handleTextChange={this.handleBasicsTextChange}
                        rfoNumber={this.state.customer.rfoNumber}
                        customerName={this.state.customer.name}
                        agreementName={this.state.basics.agreementName}
                        agreementDescription={this.state.basics.agreementDescription}
                        startDate={this.state.basics.startDate}
                        handleStartDateChange={this.handleStartDateChange}
                        endDate={this.state.basics.endDate}
                        handleEndDateChange={this.handleEndDateChange}
                        handleSignedAgreementChange={this.handleSignedAgreementChange}
                        fundingMethod={this.state.basics.fundingMethod}
                        handleFundingMethodChange={this.handleFundingMethodChange}
                        paymentTo={this.state.basics.paymentTo}
                        handlePaymentToChange={this.handlePaymentToChange}
                        agendaPayment={this.state.basics.agendaPayment}
                        handleAgendaPaymentChange={this.handleAgendaPaymentChange}
                        handlingChange={this.state.basics.handlingChange}
                        dealersVisibility={this.state.basics.dealersVisibility}
                        handleDealersVisibilityChange={this.handleDealersVisibilityChange}
                        volumeDiscountType={this.state.basics.volumeDiscountType}
                        handleVolumeDiscountTypeChange={this.handleVolumeDiscountTypeChange}
                        discountUnit={this.state.basics.discountUnit}
                        handleDiscountUnitChange={this.handleDiscountUnitChange}
                        combinability={this.state.basics.combinability}
                        handleCombinabilityChange={this.handleCombinabilityChange}
                        />
                );
            case 2:
                return (
                    <Dealers
                        dealerTableData={dealerTableData}
                        applicableDealer={this.state.dealers.applicableDealer}
                        handleDealerTableDataRowSelection={this.handleDealerTableDataRowSelection}
                        handleApplicableDealerRowSelection={this.handleApplicableDealerRowSelection}
                        />
                );
            case 3:
                return (
                    <Volume
                        handleTextChange={this.handleVolumeTextChange}
                        handleTriggerCreditChange={this.handleTriggerCreditChange}
                        handlePaymentToChange={this.handlePaymentToChange}
                        rfoNumber={this.state.customer.rfoNumber}
                        customerName={this.state.customer.name}
                        bandingTableData={this.state.volume.bandingTableData}
                        onAddBandingValue={this.onAddBandingValue}
                        bandingValueFrom={this.state.volume.bandingValueFrom}
                        bandingValueTo={this.state.volume.bandingValueTo}
                        />
                );
            case 4:
                return (
                    <ModelSupport />
                );
            case 5:
                return (
                    <MiscText
                        handleTextChange={this.handleMiscTextChange}
                        comments={this.state.miscText.comments}
                        supportJustification={this.state.miscText.supportJustification}/>
                );
            case 6:
                return (
                    <Confirmation
                        tabIndex={this.state.confirmation.tabIndex}
                        handleTabChange={this.handleTabChange}/>
                );
            default:
                return "You\"re a long way from home !";
        }
    }

    renderContent() {
        const {finished, stepIndex} = this.state;
        const contentStyle = { margin: "0 16px", overflow: "hidden" };

        if (finished) {
            return (
                <div style={contentStyle}>
                    <p>
                        <a
                            href="#"
                            onClick={(event) => {
                                event.preventDefault();
                                this.setState({ stepIndex: 0, finished: false });
                            } }
                            >
                            Click here
                        </a> to reset the example.
                    </p>
                </div>
            );
        }

        return (
            <div style={contentStyle}>
                <div>{this.getStepContent(stepIndex) }</div>
                <div style={{ marginTop: 24, marginBottom: 12 }}>
                    {stepIndex !== 0 &&
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onTouchTap={this.handlePrev}
                            style={{ marginRight: 12 }}
                            />
                    }
                    <RaisedButton
                        label={stepIndex === 0 ? "Create Agreement" : stepIndex === 6 ? "Finish" : "Next"}
                        primary={true}
                        onTouchTap={this.handleNext}
                        disabled={this.state.customer.selectedRow == null}
                        />
                </div>
            </div>
        );
    }

    //-- Stepper --

    render() {
        const {loading, stepIndex} = this.state;

        return (
            <div style={{ width: "100%", maxWidth: 1000, margin: "auto" }}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Customers</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Basics</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Dealers</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Volume</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Model Support</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Mics Text</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Confirmation</StepLabel>
                    </Step>
                </Stepper>
                <ExpandTransition loading={loading} open={true}>
                    {this.renderContent() }
                </ExpandTransition>
            </div>
        );
    }

}

export default AddNewPage;