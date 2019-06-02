import configureStore from "redux-mock-store";
import initialState from "../redux/modules/properties/initialState";

const mockStore = configureStore();
const store = mockStore(initialState);

export default store;
