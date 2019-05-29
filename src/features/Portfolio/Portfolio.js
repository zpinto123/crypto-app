import React, { Component } from "react";
import { View, FlatList } from "react-native";

import { CoinRow, Text } from "../../common";
import { themeUtils } from "../../utils";
import { common } from "../../constants";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);

const TopbarContainer = style(View, styles.topContainer);
const PortfolioValueText = style(Text, styles.portfolioValueText);

const ListContainer = style(View, styles.listContainer);

class Portfolio extends Component {
  keyExtractor = ({ CoinInfo: { Id } }) => Id;

  getItemLayout = (dt, index) => ({
    length: common.ROW_HEIGHT,
    offset: common.ROW_HEIGHT * index,
    index
  });

  renderItem = ({
    item: {
      CoinInfo: { Id, Name, FullName },
      RAW: {
        USD: { PRICE }
      }
    }
  }) => (
    <CoinRow
      Id={Id}
      Name={Name}
      FullName={FullName}
      PRICE={PRICE}
      // handleOnPress={this.handleOnPress(Name)}
    />
  );

  render() {
    const { data } = this.props;
    return (
      <Container>
        <TopbarContainer>
          <PortfolioValueText>$30,504.203</PortfolioValueText>
        </TopbarContainer>
        <ListContainer>
          <FlatList
            initialNumToRender={10}
            keyExtractor={this.keyExtractor}
            data={data}
            renderItem={this.renderItem}
            getItemLayout={this.getItemLayout}
          />
        </ListContainer>
      </Container>
    );
  }
}

export default Portfolio;
