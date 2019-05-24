import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCoinPrices } from "../../redux/modules/cryptocompare/actions";

import Watchlist from "./Watchlist";

const mapStateToProps = state => ({
  data: state.cryptocompare.data,
  error: state.cryptocompare.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCoinPrices
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
