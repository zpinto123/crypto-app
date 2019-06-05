import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { SearchBar as SearchComp } from "react-native-elements";
import { debounce } from "lodash";

import CoinRow from "../CoinRow";

import { themeUtils, collectionUtils } from "../../utils";
import { common } from "../../constants";
import { goToCoinDetails } from "../../navigation/navigationRoots";

import styles from "./styles";

const { objectToArray } = collectionUtils;
const { style } = themeUtils;

const Container = style(View, styles.container);
const SearchBar = style(SearchComp, styles.search);

class CoinList extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps", nextProps, prevState);
  //   //   if(nextProps.someValue!==prevState.someValue){
  //   //     return { someState: nextProps.someValue};
  //   //  }
  //   return null;
  // }

  constructor(props) {
    super(props);

    const { data } = props;
    this.state = {
      data: objectToArray(data),
      searchText: "",
      searchResults: null
    };
    this.handleOnSearch = debounce(this.handleOnSearch, 1000);
  }

  handleOnSearch = search => {
    const { data } = this.state;
    if (!search || !search.length) return;
    const searchUpper = search.toUpperCase();
    const searchResults = [];
    data.forEach(coin => {
      const { symbol, name } = coin;

      if (
        symbol.toUpperCase().includes(searchUpper) ||
        name.toUpperCase().includes(searchUpper)
      )
        searchResults.push(coin);
    });
    this.setState({ searchResults });
  };

  updateSearch = searchText => {
    const searchResults = searchText.length ? {} : { searchResults: null };
    this.setState({ searchText, ...searchResults });
    this.handleOnSearch(searchText);
  };

  keyExtractor = ({ id }) => id;

  getItemLayout = (dt, index) => ({
    length: common.ROW_HEIGHT,
    offset: common.ROW_HEIGHT * index,
    index
  });

  handleOnRowPress = coin => () => {
    const { componentId } = this.props;
    const { name } = coin;
    goToCoinDetails(componentId, { coin }, name);
  };

  renderItem = ({ item }) => {
    const { withSearch, componentId, fromScreen } = this.props;
    const { id, symbol, name, price } = item;
    console.log("item: ", item);
    const { handleOnPress = () => {} } = this.state;
    return (
      <CoinRow
        addCoin={withSearch}
        id={id}
        symbol={symbol}
        name={name}
        price={price}
        componentId={componentId}
        fromScreen={fromScreen}
        // handleOnPress={handleOnPress(Name)}
        handleOnRowPress={this.handleOnRowPress(item)}
      />
    );
  };

  render() {
    const { theme, withSearch = false } = this.props;
    const { data, searchText, searchResults } = this.state;
    console.log("data handleOnSearch: ", data);
    return (
      <Container>
        <FlatList
          ListHeaderComponent={
            withSearch && (
              <SearchBar
                onLayout={this.handleOnLayout}
                placeholder="Add coin..."
                onChangeText={this.updateSearch}
                value={searchText}
                containerStyle={{
                  backgroundColor: theme.content.backgroundColor,
                  borderWidth: 0
                }}
                inputContainerStyle={{
                  backgroundColor: theme.bottomTab.backgroundColor,
                  borderWidth: 0
                }}
                round
              />
            )
          }
          initialNumToRender={10}
          keyExtractor={this.keyExtractor}
          data={withSearch ? searchResults : data}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default CoinList;
