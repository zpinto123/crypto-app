import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "react-native-elements";

import Portfolio from "./Portfolio";

const mapStateToProps = state => ({
  data: state.cryptocompare.data,
  error: state.cryptocompare.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      // getCoinPrices
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Portfolio));
