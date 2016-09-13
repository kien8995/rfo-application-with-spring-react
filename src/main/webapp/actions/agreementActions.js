import * as types from "./actionTypes";
import AgreementApi from "../api/agreementApi";

export function addAgreementSuccess(agreement) {
    return {
        type: types.ADD_AGREEMENT_SUCCESS,
        agreement
    };
}

export function addAgreementError() {
    return {
        type: types.ADD_AGREEMENT_ERROR
    };
}

export function addAgreement(agreement) {
    return function (dispatch) {
        return AgreementApi.addAgreement(agreement).then(agreement => {
            console.log(agreement);
            dispatch(addAgreementSuccess(JSON.parse(JSON.stringify(agreement.data))));
        }).catch(e => {
            throw(e);
        });
    };
}