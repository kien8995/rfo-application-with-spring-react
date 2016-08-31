import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {DealersForm} from "./DealersForm";
import {DealersTable} from "./DealersTable";

let dealers = [
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

class Dealers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dealerCode: "",
            dealerName: "",
            applicableDealers: []
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onDealersRowSelected = this.onDealersRowSelected.bind(this);
        this.onApplicableDealersRowSelected = this.onApplicableDealersRowSelected.bind(this);
    }

    onTextChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);

        this.props.onDealersChange(this.state);
    }

    onDealersRowSelected(key) {
        let applicableDealers = this.state.applicableDealers;
        applicableDealers.push(dealers[key]);
        dealers.splice(key, 1);
        this.setState({ applicableDealers });

        this.props.onDealersChange(this.state);
    }

    onApplicableDealersRowSelected(key) {
        let applicableDealers = this.state.applicableDealers;
        dealers.push(applicableDealers[key]);
        applicableDealers.splice(key, 1);
        this.setState({ applicableDealers });

        this.props.onDealersChange(this.state);
    }

    render() {
        return (
            <div>
                <DealersForm
                    dealerCode={this.state.dealerCode}
                    dealerName={this.state.dealerName}
                    onTextChange={this.onTextChange} />

                <DealersTable
                    dealers={dealers}
                    applicableDealers={this.state.applicableDealers}
                    onDealersRowSelected={this.onDealersRowSelected}
                    onApplicableDealersRowSelected={this.onApplicableDealersRowSelected} />
            </div>
        );
    }
}

export default Dealers;