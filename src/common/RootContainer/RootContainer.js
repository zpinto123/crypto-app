import React, { Component } from "react";
import { View } from "react-native";
import { ThemeProvider } from "react-native-elements";

import { themeUtils } from "../../utils";
import * as themes from "../../design/themes";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class RootContainer extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={themes.DARK}>
        <Container>{children}</Container>
      </ThemeProvider>
    );
  }
}

export default RootContainer;
