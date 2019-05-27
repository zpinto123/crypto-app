import React, { Component } from "react";
import { FlatList } from "react-native";

import { CoinRow } from "../../common";

class Watchlist extends Component {
  componentDidMount() {
    const { data, getCoinPrices } = this.props;
    if (!data) getCoinPrices();
  }

  keyExtractor = ({ CoinInfo: { Id } }) => Id;

  render() {
    const { data } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={({ item }) => <CoinRow {...item} />}
        getItemLayout={(dt, index) => ({
          length: 72.9,
          offset: 72.9 * index,
          index
        })}
      />
    );
  }
}

export default Watchlist;
