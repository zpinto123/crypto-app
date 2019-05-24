import { combineReducers } from "redux";
import cryptocompare from "./modules/cryptocompare/reducers";

export const rootReducer = combineReducers({
  cryptocompare
});
