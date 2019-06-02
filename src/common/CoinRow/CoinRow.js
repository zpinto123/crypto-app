import React, { Component } from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

import IonIcons from "react-native-vector-icons/Ionicons";

import Text from "../Text";

import cryptoIcons from "../../assets/icons/crypto/color";
import { valueUtils, themeUtils } from "../../utils";

import styles from "./styles";

const { parsePrice } = valueUtils;
const { style } = themeUtils;

const Container = style(View, styles.container);
const ContentContainer = style(View, styles.contentContainer);
const LeftContainer = style(View, styles.leftContainer);
const Icon = style(FastImage, styles.icon);
const MiddleContainer = style(View, styles.middleContainer);
const TitleText = style(Text, styles.titleText);
const SubtitleText = style(Text, styles.subtitleText);
const RightContainer = style(View, styles.rightContainer);
const PriceText = style(Text, styles.priceText);
const AddCoinIcon = () => (
  <IonIcons name="ios-add-circle" size={40} color="#147bc3" />
);
class CoinRow extends Component {
  shouldComponentUpdate(nextProps) {
    const { PRICE, addCoin } = this.props;
    // if (addCoin) return false;
    if (nextProps.PRICE !== PRICE) return true;
    return false;
  }

  handleDeleteMode = value => () => {
    const { handleOnDeleteModeChange } = this.props;
    handleOnDeleteModeChange(value);
  };

  handleAddCoin = id => () => {
    const { componentId, addCoinToList } = this.props;
    console.log("handleAddCoin id: ", id);
    if (componentId === "AddCoin") addCoinToList(id);
    else if (componentId === "Watchlist") return;
  };

  render() {
    const { addCoin } = this.props;
    if (addCoin)
      return <AddCoinRow {...this.props} handleAddCoin={this.handleAddCoin} />;
    return <DefaultRow {...this.props} />;
  }
}

const AddCoinRow = ({ id, symbol, name, handleOnRowPress, handleAddCoin }) => (
  <TouchableWithoutFeedback onPress={handleOnRowPress}>
    <Container>
      <ContentContainer>
        <LeftContainer>
          {cryptoIcons[symbol.toLowerCase()] ? (
            // <Icon source={cryptoIcons[symbol.toLowerCase()] || null} />
            <Icon
              source={{
                uri: cryptoIcons[symbol.toLowerCase()] || null,
                priority: FastImage.priority.normal
              }}
            />
          ) : (
            <PlaceholderIcon name={symbol} />
          )}
        </LeftContainer>
        <MiddleContainer>
          <TitleText>{symbol.toUpperCase()}</TitleText>
          <SubtitleText>{name}</SubtitleText>
        </MiddleContainer>
        <RightContainer>
          <TouchableOpacity onPress={handleAddCoin(id)}>
            <AddCoinIcon />
          </TouchableOpacity>
        </RightContainer>
      </ContentContainer>
    </Container>
  </TouchableWithoutFeedback>
);

const DefaultRow = ({ Name, FullName, PRICE, handleOnRowPress }) => (
  <TouchableWithoutFeedback onPress={handleOnRowPress}>
    <Container>
      <ContentContainer>
        <LeftContainer>
          {cryptoIcons[Name.toLowerCase()] ? (
            <Icon
              source={{
                uri: cryptoIcons[Name.toLowerCase()] || null,
                priority: FastImage.priority.normal
              }}
            />
          ) : (
            <PlaceholderIcon name={Name} />
          )}
        </LeftContainer>
        <MiddleContainer>
          <TitleText>{Name}</TitleText>
          <SubtitleText>{FullName}</SubtitleText>
        </MiddleContainer>
        <RightContainer>
          <Price value={PRICE} />
        </RightContainer>
      </ContentContainer>
    </Container>
  </TouchableWithoutFeedback>
);

const Price = ({ value }) => <PriceText>{`$${parsePrice(value)}`}</PriceText>;

const PlaceholderContainer = style(View, styles.placeholderContainer);
const PlaceholderText = style(Text, styles.placeholderText);

const PlaceholderIcon = ({ name }) => (
  <PlaceholderContainer>
    <PlaceholderText>{name.toUpperCase().substring(0, 3)}</PlaceholderText>
  </PlaceholderContainer>
);

export default CoinRow;
