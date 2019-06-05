import React, { Component } from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";
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
    const { price } = this.props;
    // if (addCoin) return false;
    if (nextProps.price !== price) return true;
    return false;
  }

  handleAddCoin = id => () => {
    const {
      fromScreen,
      componentId,
      addCoinToPortfolio,
      addCoinToWatchlist,
      selectedPortfolioId
    } = this.props;

    if (fromScreen === "Portfolio") {
      addCoinToPortfolio(selectedPortfolioId, id);
      Navigation.popToRoot(componentId);
    } else if (fromScreen === "Watchlist") addCoinToWatchlist(id);
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
            <Icon source={cryptoIcons[symbol.toLowerCase()] || null} />
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

const DefaultRow = ({ id, symbol, name, price, handleOnRowPress }) => (
  <TouchableWithoutFeedback onPress={handleOnRowPress}>
    <Container>
      <ContentContainer>
        <LeftContainer>
          {cryptoIcons[symbol] ? (
            <Icon source={cryptoIcons[symbol] || null} />
          ) : (
            <PlaceholderIcon name={symbol} />
          )}
        </LeftContainer>
        <MiddleContainer>
          <TitleText>{name}</TitleText>
          <SubtitleText>{name}</SubtitleText>
        </MiddleContainer>
        <RightContainer>
          <Price value={price} />
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
