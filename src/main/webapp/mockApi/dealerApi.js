import delay from "./delay";

const dealers = [
    {
        dealerCode: "WES489",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES410",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES411",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES412",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES413",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES414",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES415",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES416",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES417",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
    },
    {
        dealerCode: "WES418",
        dealerName: "Westgate Honda",
        dealerTown: "Grimsby",
        dealerCountry: "North East"
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