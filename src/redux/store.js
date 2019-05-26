import React from "react";
import { ActivityIndicator } from "react-native";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import FilesystemStorage from "redux-persist-filesystem-storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducers";

import { RootContainer } from "../common";

const persistConfig = {
  key: "root",
  storage: FilesystemStorage
};

const middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

export const wrapper = Component => () => props => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<ActivityIndicator size="large" />}
    >
      <RootContainer>
        <Component {...props} />
      </RootContainer>
    </PersistGate>
  </Provider>
);
