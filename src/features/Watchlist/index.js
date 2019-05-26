import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "react-native-elements";

import { getCoinPrices } from "../../redux/modules/cryptocompare/actions";

import Watchlist from "./Watchlist";

const mapStateToProps = state => ({
  data: state.cryptocompare.data,
  coinImages: state.cryptocompare.coinImages,
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
)(withTheme(Watchlist));
