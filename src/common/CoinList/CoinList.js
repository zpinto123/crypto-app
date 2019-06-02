import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { SearchBar as SearchComp } from "react-native-elements";
import { debounce } from "lodash";

import CoinRow from "../CoinRow";

import { themeUtils } from "../../utils";
import { common } from "../../constants";
import { goToCoinDetails } from "../../navigation/navigationRoots";

import styles from "./styles";

const { style } = themeUtils;

const Container = style(View, styles.container);
const SearchBar = style(SearchComp, styles.search);

class CoinList extends Component {
  constructor(props) {
    super(props);
    this.handleOnSearch = debounce(this.handleOnSearch, 500);
  }

  state = {
    searchText: "",
    searchResults: null,
    deleteMode: false,
    deleteSelected: []
  };

  handleOnDeleteModeChange = deleteMode => this.setState({ deleteMode });

  handleSelectedForDelete = coinId => {
    const { deleteSelected } = this.state;
    const newDeleteSelected = [...deleteSelected, coinId];
    this.setState({ deleteSelected: newDeleteSelected });
  };

  handleOnSearch = search => {
    const { data } = this.props;
    console.log("data handleOnSearch: ", data);
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
    const { componentId } = this.props;
    const { id, symbol, name } = item;
    const { deleteMode, deleteSelected, handleOnPress = () => {} } = this.state;
    return (
      <CoinRow
        addCoin
        id={id}
        symbol={symbol}
        name={name}
        componentId={componentId}
        // handleOnPress={handleOnPress(Name)}
        handleOnDeleteModeChange={this.handleOnDeleteModeChange}
        handleSelectedForDelete={this.handleSelectedForDelete}
        deleteSelected={deleteSelected}
        deleteMode={deleteMode}
        handleOnRowPress={this.handleOnRowPress(item)}
      />
    );
  };

  render() {
    const { data, theme, withSearch = false } = this.props;
    const { searchText, searchResults } = this.state;
    console.log("this.test: ", this.test);

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
          data={searchResults}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}

export default CoinList;
