import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";
import { addCoinToList } from "../../redux/modules/coins/actions";

import CoinRow from "./CoinRow";

const mapStateToProps = state => ({
  list: state.coins.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCoinToList
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(CoinRow));
