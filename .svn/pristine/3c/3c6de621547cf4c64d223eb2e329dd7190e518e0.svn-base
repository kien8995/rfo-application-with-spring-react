import delay from "./delay";

const customers = [
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

class CustomerApi {
    static findCustomers(param) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let results = customers.filter((customer) => {
                    return (
                        (param.rfoNumber === "" || customer.rfoNumber.indexOf(param.rfoNumber) !== -1) &&
                        (param.name === "" || customer.name.indexOf(param.name) !== -1) &&
                        (param.customerType === "" || customer.customerType.indexOf(param.customerType) !== -1) &&
                        (param.postcode === "" || customer.postcode.indexOf(param.postcode) !== -1) &&
                        (param.businessArea === "" || customer.businessArea.indexOf(param.businessArea) !== -1) &&
                        (param.region === "" || customer.region.indexOf(param.region) !== -1)
                    );
                });

                resolve(Object.assign([], results));
            }, delay);
        });
    }
}

export default CustomerApi;