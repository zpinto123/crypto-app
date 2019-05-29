import React, { Component } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

class Settings extends Component {
  render() {
    const { setTheme } = this.props;
    return (
      <View>
        <Button title="Light" onPress={() => setTheme("LIGHT")} />
        <Button title="Navy blue" onPress={() => setTheme("NAVY_BLUE")} />
        <Button title="Dark gray" onPress={() => setTheme("DARK_GRAY")} />
      </View>
    );
  }
}

export default Settings;
