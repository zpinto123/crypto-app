import React, { Component } from "react";
import { FlatList, TouchableHighlight, Dimensions } from "react-native";
import { Navigation } from "react-native-navigation";
import { Container, Header, View, Button, Icon, Fab } from "native-base";

import { CoinRow } from "../../common";

const { height, width } = Dimensions.get("window");

class Watchlist extends Component {
  state = { active: false };

  componentWillMount() {
    const { data, getCoinPrices } = this.props;
    if (!data) getCoinPrices();
  }

  keyExtractor = ({ CoinInfo: { Id } }) => Id;

  getItemLayout = (dt, index) => ({
    length: 72.9,
    offset: 72.9 * index,
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
    <TouchableHighlight onPress={this.handleOnPress(Name)}>
      <CoinRow
        Id={Id}
        Name={Name}
        FullName={FullName}
        PRICE={PRICE}
        // handleOnPress={this.handleOnPress(Name)}
      />
    </TouchableHighlight>
  );

  handleOnPress = coin => () => {
    const { componentId, theme } = this.props;
    Navigation.push(componentId, {
      component: {
        name: "Charts",
        passProps: {
          coin
        },
        options: {
          topBar: {
            visible: true,
            title: {
              text: "Charts",
              fontSize: 20,
              color: theme.topBar.textColor,
              fontFamily: "Helvetica",
              alignment: "center"
            },
            background: {
              color: theme.topBar.backgroundColor
            },
            backButton: {
              color: theme.topBar.textColor,
              visible: true
            }
          }
        }
      }
    });
  };

  render() {
    const { data } = this.props;
    console.log("Watchlist");
    return (
      <View>
        <FlatList
          initialNumToRender={10}
          keyExtractor={this.keyExtractor}
          data={data}
          renderItem={this.renderItem}
          getItemLayout={this.getItemLayout}
        />
        {/* <Fab
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: theme.bottomTab.backgroundColor,
            position: "absolute",
            right: width / 2 - 47,
            bottom: -60
          }}
          position="bottomRight"
          onPress={null}
        >
          <Icon name="add" />
        </Fab> */}
      </View>
    );
  }
}

export default Watchlist;
