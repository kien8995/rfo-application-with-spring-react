import axios from "axios";

class AgreementApi {
    static addAgreement(agreement) {
        console.log(agreement);
        return axios(
            {
                url: "http://localhost:8080/api/agreements",
                timeout: 20000,
                method: "post",
                responseType: "json",
                data: JSON.parse(JSON.stringify(agreement)),
            }
        );
    }

}

export default AgreementApi;














































































