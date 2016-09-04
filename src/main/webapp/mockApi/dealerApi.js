import delay from "./delay";

const dealers = [
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
    {
        code: "WES414",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES415",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES416",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES417",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
    {
        code: "WES418",
        name: "Westgate Honda",
        town: "Grimsby",
        country: "North East"
    },
];

class DealerApi {
    static loadAllDealers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], dealers));
            }, delay);
        });
    }
}

export default DealerApi;