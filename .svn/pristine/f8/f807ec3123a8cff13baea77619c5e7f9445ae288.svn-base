import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {
    Step,
    Stepper,
    StepLabel,
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ExpandTransition from "material-ui/internal/ExpandTransition";

import {
    Customer,
    Basics,
    Dealers,
    Volume,
    ModelSupport,
    MiscText,
    Confirmation
} from "../common";

class AddNewAgreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
            customer: null,
            basics: null,
            dealers: null,
            volume: null,
            miscText: null,
            confirmation: null
        };

        this.onCustomerChange = this.onCustomerChange.bind(this);

        this.onBasicsChange = this.onBasicsChange.bind(this);

        this.onDealersChange = this.onDealersChange.bind(this);

        this.onVolumeChange = this.onVolumeChange.bind(this);

        this.onMiscTextChange = this.onMiscTextChange.bind(this);


        //-- Stepper --
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        //-- Stepper --
    }

    onCustomerChange(value) {
        this.setState({ customer: value });
    }

    onBasicsChange(value) {
        this.setState({ basics: value });
    }

    onDealersChange(value) {
        this.setState({ dealers: value });
    }

    onVolumeChange(value) {
        this.setState({ volume: value });
    }

    onMiscTextChange(value) {
        this.setState({ miscText: value });
    }



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
                    <Customer onCustomerChange={this.onCustomerChange} />
                );
            case 1:
                return (
                    <Basics
                        rfoNumber={this.state.customer && this.state.customer.selectedRow.rfoNumber}
                        customerName={this.state.customer && this.state.customer.selectedRow.name}
                        onBasicsChange={this.onBasicsChange} />
                );
            case 2:
                return (
                    <Dealers onDealersChange={this.onDealersChange} />
                );
            case 3:
                return (
                    <Volume
                        rfoNumber={this.state.customer.selectedRow.rfoNumber}
                        customerName={this.state.customer.selectedRow.name}
                        onVolumeChange={this.onVolumeChange} />
                );
            case 4:
                return (
                    <ModelSupport />
                );
            case 5:
                return (
                    <MiscText
                        onMiscTextChange={this.onMiscTextChange} />
                );
            case 6:
                return (
                    <Confirmation
                        customer={this.state.customer.selectedRow}
                        basics={this.state.basics}
                        />
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
                        label={stepIndex === 0 ? "Create Agreement" : stepIndex === 6 ? "Submit" : "Next"}
                        primary={true}
                        onTouchTap={this.handleNext}
                        disabled={!this.state.customer || this.state.customer.selectedRow === null}
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

export default AddNewAgreement;