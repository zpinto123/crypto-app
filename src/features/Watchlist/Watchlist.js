import React, { Component } from "react";
import { FlatList } from "react-native";

import { WatchlistItem } from "./parts";

class Watchlist extends Component {
  componentDidMount() {
    const { data, getCoinPrices } = this.props;
    if (!data) getCoinPrices();
  }

  keyExtractor = ({ CoinInfo: { Id } }) => Id;

  render() {
    const { data, error } = this.props;
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={({ item }) => <WatchlistItem {...item} />}
      />
    );
  }
}

export default Watchlist;
