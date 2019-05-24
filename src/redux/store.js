import { AsyncStorage } from "react-native";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import FilesystemStorage from "redux-persist-filesystem-storage";
// import ExpoFileSystemStorage from "redux-persist-expo-filesystem";
import { rootReducer } from "./rootReducers";

const persistConfig = {
  key: "root",
  storage: FilesystemStorage
};

const middlewares = [];

// if (__DEV__) {
//   middlewares.push(createLogger());
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
