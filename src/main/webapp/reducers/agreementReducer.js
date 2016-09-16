import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function agreementReducer(state = initialState.agreements, action) {
    switch (action.type) {
        case types.LOAD_AGREEMENTS_SUCCESS:
            return action.agreements;

        case types.ADD_AGREEMENT_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.agreement)
            ];

        case types.UPDATE_AGREEMENT_SUCCESS:
            return [
                ...state.filter(agreement => {
                    return agreement.agreementPK.agreementNumber !== action.agreement.agreementPK.agreementNumber;
                }),
                Object.assign({}, action.agreement)
            ];
            
        default:
            return state;
    }
}
