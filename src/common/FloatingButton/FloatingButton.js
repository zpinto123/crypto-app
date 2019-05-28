import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { themeUtils } from '../../utils';

import styles from './styles';

const { style } = themeUtils;

const Container = style(View, styles.container);

class TabBarIcon extends Component {
  render() {
    const { theme } = this.props;
    return (
      <Container
        style={{
          backgroundColor: theme.bottomTab.backgroundColor
        }}
      >
        <Text style={{ color: 'white' }}>ADD</Text>
      </Container>
    );
  }
}

export default TabBarIcon;
