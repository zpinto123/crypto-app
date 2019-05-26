import React, { Component } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
// import { Button, ListItem, ThemeProvider } from "react-native-elements";
import * as themes from "../../design/themes";

class Settings extends Component {
  render() {
    const { setTheme, updateTheme } = this.props;
    // const {
    //   CoinInfo: { Name, FullName, ImageUrl },
    //   RAW: {
    //     USD: { PRICE }
    //   }
    // } = this.props;
    return (
      <ThemeProvider>
        <View>
          <Button
            title="Change theme"
            onPress={() => {
              setTheme("LIGHT", updateTheme);
            }}
          />
        </View>
      </ThemeProvider>
    );
  }
}

export default Settings;
