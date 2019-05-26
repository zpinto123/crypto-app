import React, { Component } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
// import { Button, ListItem, ThemeProvider } from "react-native-elements";

// import { Button, ThemeProvider } from "react-native-elements";

class Portfolio extends Component {
  componentDidMount() {
    const { data, getCoinPrices } = this.props;
    // if (!data) getCoinPrices();
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
      // <ThemeProvider>
      <View>
        <Text>HELLO FROM PORTFOLIO</Text>
      </View>
      // </ThemeProvider>
    );
  }
}

export default Portfolio;
