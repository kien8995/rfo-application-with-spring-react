import delay from "./delay";

const agreements = [
    {
        "agreementPK": {
            "agreementNumber": 123,
            "variantNumber": 1
        },
        "name": "Agreement Name",
        "description": "Agreement Description",
        "startDate": 61434176400000,
        "endDate": 61434176400000,
        "paymentTo": "Dealer",
        "amisAccountCode": null,
        "handlingChange": "100",
        "signRequired": "yes",
        "signReceived": null,
        "signReceivedDate": null,
        "dealerVisibility": "DealerVisibility",
        "combinability": "Combinability",
        "numberOfRegistrations": 3,
        "discountUnit": "%",
        "lastStatusUpdatedDate": 1473672003000,
        "authorisedBy": null,
        "authorsiedDate": 1473672003000,
        "createdDate": 1473672003000,
        "createdBy": null,
        "lastUpdatedDate": 1473672003000,
        "lastUpdatedBy": null,
        "agreementDealerList": [],
        "fundingMethod": {
            "fundingMethodId": 1,
            "fundingMethodName": "Fleet",
            "fundingType": "Fleet",
            "costCentre": null,
            "budgetCode": null,
            "contractTemplateLocation": null,
            "signedContractDefault": null,
            "status": null,
            "amisDeptCode": null,
            "amisReasonCode": null,
            "createdDate": 1473440659000,
            "lastUpdatedDate": 1473440659000,
            "agreementDocumentList": []
        },
        "creaditNoteTextList": [
            {
                "creditNoteTextId": 3,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453375000,
                "createdDate": 1473453375000,
                "lastUpdatedDate": 1473453375000
            },
            {
                "creditNoteTextId": 4,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453676000,
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "creditNoteTextId": 6,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473521639000,
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "creditNoteTextId": 7,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522266000,
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "creditNoteTextId": 8,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522774000,
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "creditNoteTextId": 9,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473669732000,
                "createdDate": 1473669732000,
                "lastUpdatedDate": 1473669732000
            },
            {
                "creditNoteTextId": 10,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473672003000,
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "volume": {
            "volumeId": 4,
            "triggerCredit": null,
            "paymentTo": null,
            "createdDate": 1473669732000,
            "lastUpdatedDate": 1473669732000,
            "bandingList": [
                {
                    "bandingId": 4,
                    "min": 1,
                    "max": 100,
                    "createdDate": 1473669732000,
                    "lastUpdatedDate": 1473669732000
                }
            ]
        },
        "agreementStatus": {
            "agreementStatusId": 1,
            "status": "Draft",
            "createdDate": 1473441942000,
            "lastUpdatedDate": 1473441942000
        },
        "commentList": [
            {
                "commentId": 1,
                "dateTime": 1473453676000,
                "comment": "Comment",
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "commentId": 3,
                "dateTime": 1473521639000,
                "comment": "Comment",
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "commentId": 4,
                "dateTime": 1473522266000,
                "comment": "Comment",
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "commentId": 5,
                "dateTime": 1473522774000,
                "comment": "Comment",
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "commentId": 6,
                "dateTime": 1473669731000,
                "comment": "Comment",
                "createdDate": 1473669731000,
                "lastUpdatedDate": 1473669731000
            },
            {
                "commentId": 7,
                "dateTime": 1473672003000,
                "comment": "Comment",
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "rfoNumberSet": [
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
                    "lastUpdatedDate": 1473449196000,
                    "addressList": [
                        {
                            "addressId": 1,
                            "address1": "Ha Dong",
                            "address2": null,
                            "address3": null,
                            "address4": null,
                            "address5": null,
                            "city": "Ha Noi",
                            "state": "Ha Noi",
                            "country": "Viet Nam",
                            "postcode": "84",
                            "createdDate": 1473443994000,
                            "lastUpdatedDate": 1473443994000
                        }
                    ]
                }
            }
        ]
    },
    {
        id: 2,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        id: 3,
        rfoNumber: "SCO428",
        customer: "Focus Retail Group",
        postcode: "RG21 3RF",
        csm: "Tim Slater",
        startDate: "01/02/06",
        endDate: "01/08/06",
        agreement: "01697 / 002",
        status: "Approved"
    },
    {
        "agreementPK": {
            "agreementNumber": 123,
            "variantNumber": 1
        },
        "name": "Agreement Name",
        "description": "Agreement Description",
        "startDate": 61434176400000,
        "endDate": 61434176400000,
        "paymentTo": "Dealer",
        "amisAccountCode": null,
        "handlingChange": "100",
        "signRequired": "yes",
        "signReceived": null,
        "signReceivedDate": null,
        "dealerVisibility": "DealerVisibility",
        "combinability": "Combinability",
        "numberOfRegistrations": 3,
        "discountUnit": "%",
        "lastStatusUpdatedDate": 1473672003000,
        "authorisedBy": null,
        "authorsiedDate": 1473672003000,
        "createdDate": 1473672003000,
        "createdBy": null,
        "lastUpdatedDate": 1473672003000,
        "lastUpdatedBy": null,
        "agreementDealerList": [],
        "fundingMethod": {
            "fundingMethodId": 1,
            "fundingMethodName": "Fleet",
            "fundingType": "Fleet",
            "costCentre": null,
            "budgetCode": null,
            "contractTemplateLocation": null,
            "signedContractDefault": null,
            "status": null,
            "amisDeptCode": null,
            "amisReasonCode": null,
            "createdDate": 1473440659000,
            "lastUpdatedDate": 1473440659000,
            "agreementDocumentList": []
        },
        "creaditNoteTextList": [
            {
                "creditNoteTextId": 3,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453375000,
                "createdDate": 1473453375000,
                "lastUpdatedDate": 1473453375000
            },
            {
                "creditNoteTextId": 4,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453676000,
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "creditNoteTextId": 6,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473521639000,
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "creditNoteTextId": 7,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522266000,
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "creditNoteTextId": 8,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522774000,
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "creditNoteTextId": 9,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473669732000,
                "createdDate": 1473669732000,
                "lastUpdatedDate": 1473669732000
            },
            {
                "creditNoteTextId": 10,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473672003000,
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "volume": {
            "volumeId": 4,
            "triggerCredit": null,
            "paymentTo": null,
            "createdDate": 1473669732000,
            "lastUpdatedDate": 1473669732000,
            "bandingList": [
                {
                    "bandingId": 4,
                    "min": 1,
                    "max": 100,
                    "createdDate": 1473669732000,
                    "lastUpdatedDate": 1473669732000
                }
            ]
        },
        "agreementStatus": {
            "agreementStatusId": 1,
            "status": "Draft",
            "createdDate": 1473441942000,
            "lastUpdatedDate": 1473441942000
        },
        "commentList": [
            {
                "commentId": 1,
                "dateTime": 1473453676000,
                "comment": "Comment",
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "commentId": 3,
                "dateTime": 1473521639000,
                "comment": "Comment",
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "commentId": 4,
                "dateTime": 1473522266000,
                "comment": "Comment",
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "commentId": 5,
                "dateTime": 1473522774000,
                "comment": "Comment",
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "commentId": 6,
                "dateTime": 1473669731000,
                "comment": "Comment",
                "createdDate": 1473669731000,
                "lastUpdatedDate": 1473669731000
            },
            {
                "commentId": 7,
                "dateTime": 1473672003000,
                "comment": "Comment",
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "rfoNumberSet": [
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
                    "lastUpdatedDate": 1473449196000,
                    "addressList": [
                        {
                            "addressId": 1,
                            "address1": "Ha Dong",
                            "address2": null,
                            "address3": null,
                            "address4": null,
                            "address5": null,
                            "city": "Ha Noi",
                            "state": "Ha Noi",
                            "country": "Viet Nam",
                            "postcode": "84",
                            "createdDate": 1473443994000,
                            "lastUpdatedDate": 1473443994000
                        }
                    ]
                }
            }
        ]
    },
    {
        "agreementPK": {
            "agreementNumber": 123,
            "variantNumber": 1
        },
        "name": "Agreement Name",
        "description": "Agreement Description",
        "startDate": 61434176400000,
        "endDate": 61434176400000,
        "paymentTo": "Dealer",
        "amisAccountCode": null,
        "handlingChange": "100",
        "signRequired": "yes",
        "signReceived": null,
        "signReceivedDate": null,
        "dealerVisibility": "DealerVisibility",
        "combinability": "Combinability",
        "numberOfRegistrations": 3,
        "discountUnit": "%",
        "lastStatusUpdatedDate": 1473672003000,
        "authorisedBy": null,
        "authorsiedDate": 1473672003000,
        "createdDate": 1473672003000,
        "createdBy": null,
        "lastUpdatedDate": 1473672003000,
        "lastUpdatedBy": null,
        "agreementDealerList": [],
        "fundingMethod": {
            "fundingMethodId": 1,
            "fundingMethodName": "Fleet",
            "fundingType": "Fleet",
            "costCentre": null,
            "budgetCode": null,
            "contractTemplateLocation": null,
            "signedContractDefault": null,
            "status": null,
            "amisDeptCode": null,
            "amisReasonCode": null,
            "createdDate": 1473440659000,
            "lastUpdatedDate": 1473440659000,
            "agreementDocumentList": []
        },
        "creaditNoteTextList": [
            {
                "creditNoteTextId": 3,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453375000,
                "createdDate": 1473453375000,
                "lastUpdatedDate": 1473453375000
            },
            {
                "creditNoteTextId": 4,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473453676000,
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "creditNoteTextId": 6,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473521639000,
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "creditNoteTextId": 7,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522266000,
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "creditNoteTextId": 8,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473522774000,
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "creditNoteTextId": 9,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473669732000,
                "createdDate": 1473669732000,
                "lastUpdatedDate": 1473669732000
            },
            {
                "creditNoteTextId": 10,
                "creditNoteText": "CreditNoteText",
                "dateTime": 1473672003000,
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "volume": {
            "volumeId": 4,
            "triggerCredit": null,
            "paymentTo": null,
            "createdDate": 1473669732000,
            "lastUpdatedDate": 1473669732000,
            "bandingList": [
                {
                    "bandingId": 4,
                    "min": 1,
                    "max": 100,
                    "createdDate": 1473669732000,
                    "lastUpdatedDate": 1473669732000
                }
            ]
        },
        "agreementStatus": {
            "agreementStatusId": 1,
            "status": "Draft",
            "createdDate": 1473441942000,
            "lastUpdatedDate": 1473441942000
        },
        "commentList": [
            {
                "commentId": 1,
                "dateTime": 1473453676000,
                "comment": "Comment",
                "createdDate": 1473453676000,
                "lastUpdatedDate": 1473453676000
            },
            {
                "commentId": 3,
                "dateTime": 1473521639000,
                "comment": "Comment",
                "createdDate": 1473521639000,
                "lastUpdatedDate": 1473521639000
            },
            {
                "commentId": 4,
                "dateTime": 1473522266000,
                "comment": "Comment",
                "createdDate": 1473522266000,
                "lastUpdatedDate": 1473522266000
            },
            {
                "commentId": 5,
                "dateTime": 1473522774000,
                "comment": "Comment",
                "createdDate": 1473522774000,
                "lastUpdatedDate": 1473522774000
            },
            {
                "commentId": 6,
                "dateTime": 1473669731000,
                "comment": "Comment",
                "createdDate": 1473669731000,
                "lastUpdatedDate": 1473669731000
            },
            {
                "commentId": 7,
                "dateTime": 1473672003000,
                "comment": "Comment",
                "createdDate": 1473672003000,
                "lastUpdatedDate": 1473672003000
            }
        ],
        "rfoNumberSet": [
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
                    "lastUpdatedDate": 1473449196000,
                    "addressList": [
                        {
                            "addressId": 1,
                            "address1": "Ha Dong",
                            "address2": null,
                            "address3": null,
                            "address4": null,
                            "address5": null,
                            "city": "Ha Noi",
                            "state": "Ha Noi",
                            "country": "Viet Nam",
                            "postcode": "84",
                            "createdDate": 1473443994000,
                            "lastUpdatedDate": 1473443994000
                        }
                    ]
                }
            }
        ]
    }
];

class AgreementApi {
    
}

export default AgreementApi;