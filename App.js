import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Watchlist } from "./src/features";
import { store, persistor } from "./src/redux/store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  renderLoading = () => (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <Watchlist />
        </PersistGate>
      </Provider>
    );
  }
}
