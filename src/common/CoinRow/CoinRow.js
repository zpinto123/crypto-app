import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";

import cryptoIcons from "../../assets/icons/crypto/color";

import { valueUtils, themeUtils } from "../../utils";

import styles from "./styles";

const { parsePrice } = valueUtils;
const { style } = themeUtils;

class CoinRow extends PureComponent {
  render() {
    const {
      CoinInfo: { Id, Name, FullName },
      RAW: {
        USD: { PRICE }
      }
    } = this.props;

    return (
      <ListItem
        key={Id}
        leftAvatar={{
          source: cryptoIcons[Name.toLowerCase()] || null,
          renderPlaceholderContent: <PlaceholderIcon name={Name} />
        }}
        title={Name}
        subtitle={FullName}
        rightElement={<Price value={PRICE} />}
        containerStyle={{ backgroundColor: "#2b3654" }}
        titleStyle={{ color: "white" }}
        subtitleStyle={{ color: "white" }}
        topDivider
        chevron
      />
    );
  }
}

const PlaceholderContainer = style(View, styles.placeholderContainer);
const PlaceholderText = style(Text, styles.placeholderText);

const PlaceholderIcon = ({ name }) => (
  <PlaceholderContainer>
    <PlaceholderText>{name.toUpperCase().substring(0, 3)}</PlaceholderText>
  </PlaceholderContainer>
);

const PriceText = style(Text, styles.priceText);

const Price = ({ value }) => <PriceText>{`$${parsePrice(value)}`}</PriceText>;

export default CoinRow;
