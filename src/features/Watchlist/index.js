import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";

import { getAllCoinIds } from "../../redux/modules/coins/actions";

import Watchlist from "./Watchlist";

const mapStateToProps = state => ({
  data: state.coins.data,
  coinImages: state.coins.coinImages,
  error: state.coins.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllCoinIds
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Watchlist));
