import * as types from "./actionTypes";
import AgreementApi from "../api/agreementApi";

export function loadAllAgreementsSuccess(agreements) {
    return {
        type: types.LOAD_AGREEMENTS_SUCCESS,
        agreements
    };
}

export function loadAllAgreementsError() {
    return {
        type: types.LOAD_AGREEMENTS_ERROR
    };
}

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

export function loadAllAgreements() {
    return function (dispatch) {

    };
}

export function addAgreement(agreement) {
    return function (dispatch) {
        return AgreementApi.addAgreement(agreement).then(agreement => {
            console.log(agreement);
            dispatch(addAgreementSuccess(agreement));
        }).catch(e => {
            throw(e);
        });
    };
}