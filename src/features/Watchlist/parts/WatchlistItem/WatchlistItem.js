import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";

const WatchlistItem = ({
  CoinInfo: { Id, Name, FullName, ImageUrl },
  RAW: {
    USD: { PRICE }
  }
}) => (
  <ListItem
    key={Id}
    leftAvatar={{ source: { uri: `https://www.cryptocompare.com${ImageUrl}` } }}
    title={Name}
    subtitle={FullName}
  />
);

export default WatchlistItem;
