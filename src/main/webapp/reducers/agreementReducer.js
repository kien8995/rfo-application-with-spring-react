import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function agreementReducer(state = initialState.agreements, action) {
    switch (action.type) {
        case types.ADD_AGREEMENT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.agreement)
            ];

        default:
            return state;
    }
}
