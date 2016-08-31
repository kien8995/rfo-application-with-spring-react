import React, {Component} from "react";

import {ConfirmationForm} from "./ConfirmationForm";
import {ConfirmationTabs} from "./ConfirmationTabs";

class Confirmation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tabIndex: 0
        };

        this.onTabChange = this.onTabChange.bind(this);
    }

    onTabChange(value) {
        this.setState({ tabIndex: value });
    }

    render() {
        return (
            <div>
                <ConfirmationForm
                    rfoNumber={this.props.customer.rfoNumber}
                    customerName={this.props.customer.name}
                    startEnd={`${this.props.basics.startDate} - ${this.props.basics.endDate}`}
                    status={this.props.basics.status}/>

                <ConfirmationTabs
                    customer={this.props.customer}
                    basics={this.props.basics}
                    tabIndex={this.state.tabIndex}
                    onTabChange={this.onTabChange}/>
            </div>
        );
    }
}

export default Confirmation;