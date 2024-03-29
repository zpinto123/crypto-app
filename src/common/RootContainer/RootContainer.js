import React, { Component } from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View } from "react-native";
import { ThemeProvider } from "styled-components";

import { themeUtils } from "../../utils";
import * as themes from "../../design/themes";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class RootContainer extends Component {
  render() {
    const { children, encapsulate, themeSelected } = this.props;
    const overrideStyles = encapsulate
      ? { style: { alignSelf: "center" } }
      : {};

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ThemeProvider theme={themeSelected}>
          <Container {...overrideStyles}>{children}</Container>
        </ThemeProvider>
      </SafeAreaView>
    );
  }
}

RootContainer.propTypes = {
  theme: PropTypes.object,
  themeSelected: PropTypes.object
};

RootContainer.defaultProps = {
  theme: themes.NAVY_BLUE,
  themeSelected: themes.NAVY_BLUE
};

export default RootContainer;
