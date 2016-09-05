import React, {PropTypes} from "react";

import {CustomerForm} from "./CustomerForm";
import {CustomerTable} from "./CustomerTable";

const Customer = ({
    customer,
    customers,
    actions,
    onCustomerChange
}) => {


        //new comments

    if (customers.length > 0 && (customer.customerList.length !== customers.length)) {
        customer.customerList = customers.map(customer => {
            return Object.assign({}, customer);
        });
    }

    let onTextChange = (event) => {
        let object = {};
        object[event.target.name] = event.target.value;

        onCustomerChange(object);
    };

    let onCustomerTypeChange = (event, index, value) => {

        onCustomerChange({ customerType: value });
    };

    let onBusinessAreaChange = (event, index, value) => {

        onCustomerChange({ businessArea: value });
    };

    let onRegionChange = (event, index, value) => {

        onCustomerChange({ region: value });
    };

    let onButtonSearchClick = () => {
        actions.findCustomers(customer);
    };

    let onRowSelected = (key) => {
        for (let customer of customer.customerList) {
            customer["selected"] = false;
        }
        if (key.length === 1) {
            customer.customerList[key[0]]["selected"] = true;
            onCustomerChange({ customerList: customer.customerList });
            onCustomerChange({ selectedRow: customer.customerList[key[0]] });
        } else {
            onCustomerChange({ selectedRow: null });
        }
    };

    return (
        <div>
            <CustomerForm
                rfoNumber={customer.rfoNumber}
                name={customer.name}
                postcode={customer.postcode}
                customerType={customer.customerType}
                businessArea={customer.businessArea}
                region={customer.region}
                onTextChange={onTextChange}
                onCustomerTypeChange={onCustomerTypeChange}
                onBusinessAreaChange={onBusinessAreaChange}
                onRegionChange={onRegionChange}
                onButtonSearchClick={onButtonSearchClick} />

            <CustomerTable
                tableData={customer.customerList}
                onRowSelected={onRowSelected} />
        </div>
    );
};

Customer.propTypes = {
    customer: PropTypes.object.isRequired,
    customers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    onCustomerChange: PropTypes.func.isRequired
};

export default Customer;

