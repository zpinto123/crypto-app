import React, { Component } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";

import { CoinList } from "../../common";

import { themeUtils } from "../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class AddCoin extends Component {
  // constructor(props) {
  //   super(props);
  //   Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  // }

  // navigationButtonPressed = ({ buttonId }) => {
  //   this.setState({ isVisible: true });
  // };

  render() {
    const { componentId, allCoinIds } = this.props;

    return <CoinList data={allCoinIds} componentId={componentId} withSearch />;
  }
}

export default AddCoin;
