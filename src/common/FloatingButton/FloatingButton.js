import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import { themeUtils } from "../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);
const ButtonImage = style(Image, styles.buttonImage);

class TabBarIcon extends Component {
  render() {
    return (
      <Container>
        <ButtonImage
          source={require("../../assets/icons/crypto/other/wallet.png")}
        />
      </Container>
    );
  }
}

export default TabBarIcon;
