import * as types from "./actionTypes";
import CustomerApi from "../mockApi/customerApi";

export function findCustomersSuccess(customers) {
    return {
        type: types.FIND_CUSTOMERS_SUCCESS,
        customers
    };
}

export function findCustomersError() {
    return {
        type: types.FIND_CUSTOMERS_ERROR
    };
}

export function findCustomers(param) {
    return function (dispatch) {
        return CustomerApi.findCustomers(param).then(customers => {
            dispatch(findCustomersSuccess(customers));
        }).catch(e => {
            throw (e);
        });
    };
}