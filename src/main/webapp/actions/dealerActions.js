import * as types from "./actionTypes";
import DealerApi from "../api/dealerApi";

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

export function loadAllDealers() {
    return function (dispatch) {
        return DealerApi.loadAllDealers().then(dealers => {
            dispatch(loadDealersSuccess(JSON.parse(JSON.stringify(dealers.data))));
        }).catch(e => {
            throw (e);
        });
    };
}