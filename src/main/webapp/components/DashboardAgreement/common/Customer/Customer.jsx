import React, {PropTypes} from "react";

import {CustomerForm} from "./CustomerForm";
import {CustomerTable} from "./CustomerTable";

const Customer = ({
    customer,
    customers,
    onCustomerChange
}) => {

    if (customers.length > 0 && customer.customerList.length === 0) {
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
        let list = customers.filter((c) => {
            return (
                (customer.rfoNumber === "" || c.rfoNumber.indexOf(customer.rfoNumber) !== -1) &&
                (customer.rfoName === "" || c.rfoName.indexOf(customer.rfoName) !== -1) &&
                (customer.postcode === "" || c.postcode.indexOf(customer.postcode) !== -1) &&
                (customer.customerType === "" || c.customerType.customerType.indexOf(customer.customerType) !== -1) &&
                (customer.businessArea === "" || c.company.businessArea.indexOf(customer.businessArea) !== -1) &&
                (customer.region === "" || c.regionType.regionType.indexOf(customer.region) !== -1)
            );
        });

        onCustomerChange({ customerList: list });
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
                rfoName={customer.rfoName}
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
    onCustomerChange: PropTypes.func.isRequired
};

export default Customer;

