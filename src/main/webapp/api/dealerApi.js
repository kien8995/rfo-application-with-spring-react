import axios from "axios";

class DealerApi {
    static loadAllDealers() {
        return axios(
            {
                url: "http://localhost:8080/api/dealers",
                timeout: 20000,
                method: "get",
                responseType: "json"
            }
        );
    }
}

export default DealerApi;