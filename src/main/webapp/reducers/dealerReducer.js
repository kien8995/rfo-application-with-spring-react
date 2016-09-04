import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function dealerReducer(state = initialState.dealers, action) {
    switch (action.type) {
        case types.LOAD_DEALERS_SUCCESS:
            return Object.assign([],
                action.dealers
            );

        default:
            return state;
    }
}
