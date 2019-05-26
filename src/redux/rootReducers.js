import { combineReducers } from "redux";
import cryptocompare from "./modules/cryptocompare/reducers";

const rootReducer = combineReducers({
  cryptocompare
});

export default rootReducer;
