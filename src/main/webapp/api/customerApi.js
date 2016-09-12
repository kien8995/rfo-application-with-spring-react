import axios from "axios";

class CustomerApi {
    static loadAllCustomers() {
        return axios(
            {
                url: "http://localhost:8080/api/customers",
                timeout: 20000,
                method: "get",
                responseType: "json"
            }
        );
    }

    static findCustomers(param) {
        
    }
}

export default CustomerApi;