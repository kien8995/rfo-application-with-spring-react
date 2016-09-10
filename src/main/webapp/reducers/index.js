import {combineReducers} from "redux";
import customers from "./customerReducer";
import dealers from "./dealerReducer";
import agreements from "./agreementReducer";

export const rootReducer = combineReducers({
    customers,
    dealers,
    agreements
});