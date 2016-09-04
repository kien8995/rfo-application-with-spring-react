import * as types from "./actionTypes";
import DealerApi from "../mockApi/dealerApi";

export function loadDealersSuccess(dealers) {
    return {
        type: types.LOAD_DEALERS_SUCCESS,
        dealers
    };
}

export function loadDealersError() {
    return {
        type: types.LOAD_DEALERS_ERROR
    };
}

export function loadDealers() {
    return function (dispatch) {
        return DealerApi.loadAllDealers().then(dealers => {
            dispatch(loadDealersSuccess(dealers));
        }).catch(e => {
            throw (e);
        });
    };
}