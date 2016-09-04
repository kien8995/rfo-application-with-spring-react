import {combineReducers} from "redux";
import customers from "./customerReducer";
import dealers from "./dealerReducer";

export const rootReducer = combineReducers({
    customers,
    dealers
});