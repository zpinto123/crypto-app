import { combineReducers } from "redux";
import coins from "./modules/coins/reducers";
import properties from "./modules/properties/reducers";

const rootReducer = combineReducers({
  coins,
  properties
});

export default rootReducer;
