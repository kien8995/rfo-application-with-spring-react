import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as customerActions from "../../../../actions/customerActions";

import {CustomerForm} from "./CustomerForm";
import {CustomerTable} from "./CustomerTable";

class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rfoNumber: "",
            name: "",
            postcode: "",
            customerType: "",
            businessArea: "",
            region: "",
            selectedRow: null
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onCustomerTypeChange = this.onCustomerTypeChange.bind(this);
        this.onBusinessAreaChange = this.onBusinessAreaChange.bind(this);
        this.onRegionChange = this.onRegionChange.bind(this);
        this.onButtonSearchClick = this.onButtonSearchClick.bind(this);
        this.onRowSelected = this.onRowSelected.bind(this);
    }

    onTextChange(event) {
        let object = {};
        object[event.target.name] = event.target.value;
        this.setState(object);

        this.props.onCustomerChange(this.state);
    }

    onCustomerTypeChange(event, index, value) {
        this.setState({ customerType: value });

        this.props.onCustomerChange(this.state);
    }

    onBusinessAreaChange(event, index, value) {
        this.setState({ businessArea: value });

        this.props.onCustomerChange(this.state);
    }

    onRegionChange(event, index, value) {
        this.setState({ region: value });

        this.props.onCustomerChange(this.state);
    }

    onButtonSearchClick() {
        console.log("Clicked..");
        this.props.actions.findCustomers({
            rfoNumber: this.state.rfoNumber,
            name: this.state.name,
            postcode: this.state.postcode,
            customerType: this.state.customerType,
            businessArea: this.state.businessArea,
            region: this.state.region
        });
    }

    onRowSelected(key) {
        let customerTableData = this.props.customers;
        if (key.length === 1) {
            customerTableData[key[0]]["selected"] = true;
            this.state.selectedRow = customerTableData[key[0]];
        } else {
            this.state.selectedRow = null;
        }


        this.props.onCustomerChange(this.state);


        //     customerTableData[key].selected = true;
        //     this.setState({ selectedRow: customerTableData[key] });
        // } else {
        //     customerTableData[key].selected = false;
        //     this.setState({ selectedRow: null });
        // }

        console.log(this.state.selectedRow);
    }

    render() {
        return (
            <div>
                <CustomerForm
                    rfoNumber={this.state.rfoNumber}
                    name={this.state.name}
                    postcode={this.state.postcode}
                    customerType={this.state.customerType}
                    businessArea={this.state.businessArea}
                    region={this.state.region}
                    onTextChange={this.onTextChange}
                    onCustomerTypeChange={this.onCustomerTypeChange}
                    onBusinessAreaChange={this.onBusinessAreaChange}
                    onRegionChange={this.onRegionChange}
                    onButtonSearchClick={this.onButtonSearchClick} />

                <CustomerTable
                    tableData={this.props.customers}
                    onRowSelected={this.onRowSelected} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        customers: state.customers
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(customerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);

