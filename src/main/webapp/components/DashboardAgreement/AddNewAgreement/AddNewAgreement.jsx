import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as customerActions from "../../../actions/customerActions";
import * as dealerActions from "../../../actions/dealerActions";
import * as agreementActions from "../../../actions/agreementActions";

import {
    Step,
    Stepper,
    StepLabel
} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import ExpandTransition from "material-ui/internal/ExpandTransition";

import {
    Customer,
    Basics,
    Dealer,
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
            customer: {
                rfoNumber: "",
                rfoName: "",
                postcode: "",
                customerType: "",
                businessArea: "",
                region: "",
                customerList: [],
                selectedRow: null
            },
            basics: {
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
            },
            dealer: {
                dealerCode: "",
                dealerName: "",
                dealerList: [],
                applicableDealers: []
            },
            volume: {
                bandingValueFrom: "",
                bandingValueTo: "",
                bandingTableData: [],
                triggerCredit: "",
                payableTo: ""
            },
            miscText: {
                comments: "",
                supportJustification: ""
            },
            confirmation: {
                tabIndex: 0
            }
        };

        this.onCustomerChange = this.onCustomerChange.bind(this);

        this.onBasicsChange = this.onBasicsChange.bind(this);

        this.onDealerChange = this.onDealerChange.bind(this);

        this.onVolumeChange = this.onVolumeChange.bind(this);

        this.onMiscTextChange = this.onMiscTextChange.bind(this);

        this.onConfirmationChange = this.onConfirmationChange.bind(this);

        //-- Stepper --
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
        //-- Stepper --
    }

    componentDidMount() {
        this.props.customerActions.loadAllCustomers();
        this.props.dealerActions.loadAllDealers();
    }

    onCustomerChange(value) {
        this.setState({ customer: Object.assign({}, this.state.customer, value) });
    }

    onBasicsChange(value) {
        this.setState({ basics: Object.assign({}, this.state.basics, value) });
    }

    onDealerChange(value) {
        this.setState({ dealer: Object.assign({}, this.state.dealer, value) });
    }

    onVolumeChange(value) {
        this.setState({ volume: Object.assign({}, this.state.volume, value) });
    }

    onMiscTextChange(value) {
        this.setState({ miscText: Object.assign({}, this.state.miscText, value) });
    }

    onConfirmationChange(value) {
        this.setState({ confirmation: Object.assign({}, this.state.confirmation, value) });
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
                    <Customer
                        customer={this.state.customer}
                        customers={this.props.customers}
                        onCustomerChange={this.onCustomerChange} />
                );
            case 1:
                return (
                    <Basics
                        customer={this.state.customer.selectedRow}
                        basics={this.state.basics}
                        onBasicsChange={this.onBasicsChange} />
                );
            case 2:
                return (
                    <Dealer
                        dealer={this.state.dealer}
                        dealers={this.props.dealers}
                        onDealerChange={this.onDealerChange} />
                );
            case 3:
                return (
                    <Volume
                        customer={this.state.customer.selectedRow}
                        volume={this.state.volume}
                        onVolumeChange={this.onVolumeChange} />
                );
            case 4:
                return (
                    <ModelSupport />
                );
            case 5:
                return (
                    <MiscText
                        miscText={this.state.miscText}
                        onMiscTextChange={this.onMiscTextChange} />
                );
            case 6:
                return (
                    <Confirmation
                        customer={this.state.customer.selectedRow}
                        basics={this.state.basics}
                        confirmation={this.state.confirmation}
                        onConfirmationChange={this.onConfirmationChange} />
                );
            default:
                return "You\"re a long way from home !";
        }
    }

    renderContent() {
        const {finished, stepIndex} = this.state;
        const contentStyle = { margin: "0 16px", overflow: "hidden" };

console.log(this.state.customer.selectedRow);
        if (finished) {
            
            let date = new Date();
            let object = {
                agreementPK: {
                    agreementNumber: Number("" + date.getSeconds() + date.getMilliseconds()),
                    variantNumber: 1
                },
                name: this.state.basics.agreementName,
                description: this.state.basics.agreementDescription,
                startDate: this.state.basics.startDate,
                endDate: this.state.basics.endDate,
                paymentTo: this.state.basics.paymentTo,
                amisAccountCode: null,
                handlingChange: this.state.basics.handlingChange,
                signRequired: this.state.basics.signedAgreement,
                signReceived: null,
                signReceivedDate: null,
                dealerVisibility: this.state.basics.dealersVisibility,
                combinability: this.state.basics.combinability,
                numberOfRegistrations: 1,
                discountUnit: this.state.basics.discountUnit,
                authorisedBy: null,
                createdBy: null,
                lastUpdatedBy: null,
                agreementStatus: {
                    agreementStatusId: 2
                },
                fundingMethod: {
                    fundingMethodId: 1
                },
                rfoNumberSet: [
                    {
                        rfoNumberId: this.state.customer.selectedRow.rfoNumberId,
                        rfoNumber: this.state.customer.selectedRow.rfoNumber,
                        rfoName: this.state.customer.selectedRow.rfoName,
                        postcode: this.state.customer.selectedRow.postcode,
                        createdBy: null,
                        updatedBy: null,
                        createdDate: this.state.customer.selectedRow.createdDate,
                        updatedDate: this.state.customer.selectedRow.updatedDate,
                        customerType: {
                            customerTypeId: this.state.customer.selectedRow.customerType.customerTypeId,
                            customerType: this.state.customer.selectedRow.customerType.customerType,
                            createdDate: this.state.customer.selectedRow.customerType.createdDate,
                            lastUpdatedDate: this.state.customer.selectedRow.customerType.lastUpdatedDate
                        },
                        regionType: {
                            regionTypeId: this.state.customer.selectedRow.regionType.regionTypeId,
                            regionType: this.state.customer.selectedRow.regionType.regionType,
                            createdDate: this.state.customer.selectedRow.regionType.createdDate,
                            lastUpdatedDate: this.state.customer.selectedRow.regionType.lastUpdatedDate
                        },
                        company: {
                            companyId: this.state.customer.selectedRow.company.companyId,
                            name: this.state.customer.selectedRow.company.name,
                            type: this.state.customer.selectedRow.company.type,
                            status: this.state.customer.selectedRow.company.status,
                            sector: this.state.customer.selectedRow.company.sector,
                            phoneNumber: this.state.customer.selectedRow.company.phoneNumber,
                            faxNumber: this.state.customer.selectedRow.company.faxNumber,
                            emailAddress: this.state.customer.selectedRow.company.emailAddress,
                            amisCode: this.state.customer.selectedRow.company.amisCode,
                            businessArea: this.state.customer.selectedRow.company.businessArea,
                            createdBy: null,
                            createdDate: this.state.customer.selectedRow.company.createdDate,
                            lastUpdatedDate: this.state.customer.selectedRow.company.lastUpdatedDate
                        }
                    }
                ],
                commentList: [
                    {
                        comment: this.state.miscText.comments
                    }
                ],
                creaditNoteTextList: [
                    {
                        creditNoteText: this.state.miscText.supportJustification
                    }
                ],
                volume: {
                    volumeId: 20,
                    bandingList: [
                        {
                            min: 1,
                            max: 10
                        }
                    ]
                }
            };
            this.props.agreementActions.addAgreement(object);
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
                        disabled={this.state.customer.selectedRow === null}
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

function mapStateToProps(state, ownProps) {
    return {
        customers: state.customers,
        dealers: state.dealers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch),
        dealerActions: bindActionCreators(dealerActions, dispatch),
        agreementActions: bindActionCreators(agreementActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewAgreement);