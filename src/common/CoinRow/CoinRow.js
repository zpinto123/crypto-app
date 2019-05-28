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
    const { Id, Name, FullName, PRICE, theme } = this.props;
    console.log("coinRow Render");
    return (
      <ListItem
        key={Id}
        // onPress={handleOnPress}
        leftAvatar={{
          source: cryptoIcons[Name.toLowerCase()] || null,
          renderPlaceholderContent: <PlaceholderIcon name={Name} />
        }}
        title={Name}
        subtitle={FullName}
        rightElement={<Price value={PRICE} />}
        containerStyle={{ backgroundColor: theme.content.backgroundColor }}
        titleStyle={{ color: theme.content.textColor }}
        subtitleStyle={{ color: theme.content.textColor }}
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
