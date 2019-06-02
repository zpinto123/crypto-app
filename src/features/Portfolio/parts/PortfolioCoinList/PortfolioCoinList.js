import React, { Component } from "react";
import { View } from "react-native";

import { CoinList } from "../../../../common";

import { themeUtils } from "../../../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class PortfolioCoinList extends Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <CoinList data={data} componentId="Portfolio" />
      </Container>
    );
  }
}

export default PortfolioCoinList;
