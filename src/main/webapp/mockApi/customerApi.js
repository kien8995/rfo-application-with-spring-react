import delay from "./delay";

const customers = [
    {
        "rfoNumberId": 1,
        "rfoNumber": "S00428",
        "rfoName": "Bank of England",
        "postcode": "RG21 3RF",
        "createdBy": null,
        "createdDate": 1473450618000,
        "updatedDate": 1473450618000,
        "updatedBy": null,
        "customerType": {
            "customerTypeId": 1,
            "customerType": "Fleet",
            "createdDate": 1473444331000,
            "lastUpdatedDate": 1473444331000
        },
        "regionType": {
            "regionTypeId": 1,
            "regionType": "Eastern",
            "createdDate": 1473449286000,
            "lastUpdatedDate": 1473449286000
        },
        "company": {
            "companyId": 1,
            "name": null,
            "type": null,
            "status": null,
            "sector": null,
            "phoneNumber": null,
            "faxNumber": null,
            "emailAddress": null,
            "amisCode": null,
            "businessArea": "100 +",
            "createdDate": 1473449196000,
            "createdBy": null,
            "lastUpdatedDate": 1473449196000
        }
    },
    {
        "rfoNumberId": 2,
        "rfoNumber": "S00431",
        "rfoName": "Bank of England",
        "postcode": "RO43 4TR\t",
        "createdBy": null,
        "createdDate": 1473450618000,
        "updatedDate": 1473450618000,
        "updatedBy": null,
        "customerType": {
            "customerTypeId": 1,
            "customerType": "Fleet",
            "createdDate": 1473444331000,
            "lastUpdatedDate": 1473444331000
        },
        "regionType": {
            "regionTypeId": 3,
            "regionType": "Southern",
            "createdDate": 1473449287000,
            "lastUpdatedDate": 1473449287000
        },
        "company": {
            "companyId": 1,
            "name": null,
            "type": null,
            "status": null,
            "sector": null,
            "phoneNumber": null,
            "faxNumber": null,
            "emailAddress": null,
            "amisCode": null,
            "businessArea": "100 +",
            "createdDate": 1473449196000,
            "createdBy": null,
            "lastUpdatedDate": 1473449196000
        }
    },
    {
        "rfoNumberId": 3,
        "rfoNumber": "S00352",
        "rfoName": "Thamesbank of Industries",
        "postcode": "SL7 52R",
        "createdBy": null,
        "createdDate": 1473450619000,
        "updatedDate": 1473450619000,
        "updatedBy": null,
        "customerType": {
            "customerTypeId": 1,
            "customerType": "Fleet",
            "createdDate": 1473444331000,
            "lastUpdatedDate": 1473444331000
        },
        "regionType": {
            "regionTypeId": 4,
            "regionType": "Northern",
            "createdDate": 1473449287000,
            "lastUpdatedDate": 1473449287000
        },
        "company": {
            "companyId": 1,
            "name": null,
            "type": null,
            "status": null,
            "sector": null,
            "phoneNumber": null,
            "faxNumber": null,
            "emailAddress": null,
            "amisCode": null,
            "businessArea": "100 +",
            "createdDate": 1473449196000,
            "createdBy": null,
            "lastUpdatedDate": 1473449196000
        }
    },
    {
        "rfoNumberId": 4,
        "rfoNumber": "S00844",
        "rfoName": "Royal Bank of Scotland",
        "postcode": "AB5 7DD",
        "createdBy": null,
        "createdDate": 1473450619000,
        "updatedDate": 1473450619000,
        "updatedBy": null,
        "customerType": {
            "customerTypeId": 1,
            "customerType": "Fleet",
            "createdDate": 1473444331000,
            "lastUpdatedDate": 1473444331000
        },
        "regionType": {
            "regionTypeId": 4,
            "regionType": "Northern",
            "createdDate": 1473449287000,
            "lastUpdatedDate": 1473449287000
        },
        "company": {
            "companyId": 1,
            "name": null,
            "type": null,
            "status": null,
            "sector": null,
            "phoneNumber": null,
            "faxNumber": null,
            "emailAddress": null,
            "amisCode": null,
            "businessArea": "100 +",
            "createdDate": 1473449196000,
            "createdBy": null,
            "lastUpdatedDate": 1473449196000
        }
    },
    {
        "rfoNumberId": 5,
        "rfoNumber": "S00631",
        "rfoName": "Southern Banking",
        "postcode": "SO7 8RW",
        "createdBy": null,
        "createdDate": 1473450619000,
        "updatedDate": 1473450619000,
        "updatedBy": null,
        "customerType": {
            "customerTypeId": 1,
            "customerType": "Fleet",
            "createdDate": 1473444331000,
            "lastUpdatedDate": 1473444331000
        },
        "regionType": {
            "regionTypeId": 3,
            "regionType": "Southern",
            "createdDate": 1473449287000,
            "lastUpdatedDate": 1473449287000
        },
        "company": {
            "companyId": 1,
            "name": null,
            "type": null,
            "status": null,
            "sector": null,
            "phoneNumber": null,
            "faxNumber": null,
            "emailAddress": null,
            "amisCode": null,
            "businessArea": "100 +",
            "createdDate": 1473449196000,
            "createdBy": null,
            "lastUpdatedDate": 1473449196000
        }
    }
];

class CustomerApi {
    static loadAllCustomers() {

    }
    
    static findCustomers(param) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let results = customers.filter((customer) => {
                    return (
                        (param.rfoNumber === "" || customer.rfoNumber.indexOf(param.rfoNumber) !== -1) &&
                        (param.rfoName === "" || customer.rfoName.indexOf(param.rfoName) !== -1) &&
                        (param.customerType === "" || customer.customerType.customerType.indexOf(param.customerType) !== -1) &&
                        (param.postcode === "" || customer.postcode.indexOf(param.postcode) !== -1) &&
                        (param.businessArea === "" || customer.company.businessArea.indexOf(param.businessArea) !== -1) &&
                        (param.region === "" || customer.regionType.regionType.indexOf(param.region) !== -1)
                    );
                });

                resolve(Object.assign([], results));
            }, delay);
        });
    }
}

export default CustomerApi;