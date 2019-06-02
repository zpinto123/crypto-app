import React, { Component } from "react";
import { View } from "react-native";

import { PortfolioTopbar, PortfolioCoinList } from "./parts";

import { themeUtils } from "../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <PortfolioTopbar />
        <PortfolioCoinList />
      </Container>
    );
  }
}

export default Portfolio;
