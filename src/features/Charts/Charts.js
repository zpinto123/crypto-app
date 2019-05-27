import React, { Component } from "react";
import { View, Text } from "react-native";

class Charts extends Component {
  render() {
    const { Name } = this.props;
    return (
      <View>
        <Text>{Name}</Text>
      </View>
    );
  }
}

export default Charts;
