import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";
import {
  addCoinToPortfolio,
  addCoinToWatchlist
} from "../../redux/modules/coins/actions";

import CoinRow from "./CoinRow";

const mapStateToProps = state => ({
  selectedPortfolioId: state.coins.selectedPortfolioId
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCoinToPortfolio,
      addCoinToWatchlist
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(CoinRow));
