import * as types from "./actionTypes";
import CustomerApi from "../api/customerApi";

export function loadAllCustomersSuccess(customers) {
    return {
        type: types.LOAD_CUSTOMERS_SUCCESS,
        customers
    };
}

export function loadAllCustomersError() {
    return {
        type: types.LOAD_CUSTOMERS_ERROR
    };
}

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

export function loadAllCustomers() {
    return function(dispatch) {
        return CustomerApi.loadAllCustomers().then(customers => {
            // console.log(customers);
            dispatch(loadAllCustomersSuccess(JSON.parse(JSON.stringify(customers.data))));
        }).catch(e => {
            throw(e);
        });
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