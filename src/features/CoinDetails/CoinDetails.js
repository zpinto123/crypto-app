import React, { Component } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";

import { Text, Modal } from "../../common";

import { themeUtils } from "../../utils";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

class CoinDetails extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
  }

  state = { isVisible: false };

  navigationButtonPressed = ({ buttonId }) => {
    this.setState({ isVisible: true });
  };

  render() {
    const {
      coin: {
        CoinInfo: { Id, Name, FullName },
        RAW: {
          USD: { PRICE }
        }
      },
      theme
    } = this.props;
    const { isVisible } = this.state;
    return (
      <Container>
        <Modal
          isVisible={isVisible}
          handleCloseModal={() => this.setState({ isVisible: false })}
          theme={theme}
        />
        <Text>{`Id: ${Id}`}</Text>
        <Text>{`Name: ${Name}`}</Text>
        <Text>{`FullName: ${FullName}`}</Text>
        <Text>{`PRICE: ${PRICE}`}</Text>
      </Container>
    );
  }
}

export default CoinDetails;
