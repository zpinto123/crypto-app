import React, { Component } from 'react';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { themeUtils } from '../../utils';
import * as themes from '../../design/themes';

import styles from './styles';

const { style } = themeUtils;

const Container = style(View, styles.container);

class RootContainer extends Component {
  render() {
    const { children, encapsulate, themeSelected = themes.DARK } = this.props;
    const overrideStyles = encapsulate
      ? { style: { alignSelf: 'center' } }
      : {};
    console.log('themeSelected: ', themeSelected);
    return (
      <ThemeProvider theme={themeSelected}>
        <Container {...overrideStyles}>{children}</Container>
      </ThemeProvider>
    );
  }
}

export default RootContainer;
