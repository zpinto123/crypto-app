import React, { Component } from "react";
import { View } from "react-native";

import { CoinList } from "../../../../common";

import { themeUtils } from "../../../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class PortfolioCoinList extends Component {
  render() {
    const { portfolio } = this.props;
    console.log("portfolioCoinList: ", portfolio.coins);
    return (
      <Container>
        <CoinList data={portfolio.coins} componentId="Portfolio" />
      </Container>
    );
  }
}

export default PortfolioCoinList;
