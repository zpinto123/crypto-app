import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { Button, ListItem, ThemeProvider } from "react-native-elements";
import { WatchlistItem } from "./parts";

// import { Button, ThemeProvider } from "react-native-elements";

class Watchlist extends Component {
  componentDidMount() {
    const { data, getCoinPrices } = this.props;
    if (!data) getCoinPrices();
  }

  keyExtractor = ({ CoinInfo: { Id } }) => Id;

  render() {
    const { data, error } = this.props;
    // const {
    //   CoinInfo: { Name, FullName, ImageUrl },
    //   RAW: {
    //     USD: { PRICE }
    //   }
    // } = this.props;
    return (
      <ThemeProvider>
        <View>
          <Button title="Hey!" />
          <FlatList
            keyExtractor={this.keyExtractor}
            data={data}
            renderItem={({ item }) => <WatchlistItem {...item} />}
          />
        </View>
      </ThemeProvider>
    );
  }
}

export default Watchlist;
