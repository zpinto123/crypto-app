import configureStore from "redux-mock-store";
import initialState from "../redux/modules/users/initialState";

const mockStore = configureStore();
const store = mockStore(initialState);

export { store };
