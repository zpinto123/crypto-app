import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
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
      <ThemeProvider theme={themeSelected}>
        <Container {...overrideStyles}>{children}</Container>
      </ThemeProvider>
    );
  }
}

RootContainer.propTypes = {
  theme: PropTypes.object,
  themeSelected: PropTypes.object
};

RootContainer.defaultProps = {
  theme: themes.DARK,
  themeSelected: themes.DARK
};

export default RootContainer;
