import React, { Component } from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
// import { Button, ListItem, ThemeProvider } from "react-native-elements";
import * as themes from "../../design/themes";

class Settings extends Component {
  render() {
    const { setTheme } = this.props;
    return (
      <View style={{ marginTop: 100 }}>
        <Button title="Light" onPress={() => setTheme("LIGHT")} />
        <Button title="Navy blue" onPress={() => setTheme("NAVY_BLUE")} />
        <Button title="Dark gray" onPress={() => setTheme("DARK_GRAY")} />
      </View>
    );
  }
}

export default Settings;
