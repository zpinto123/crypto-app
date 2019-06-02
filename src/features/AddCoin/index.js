import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";

import AddCoin from "./AddCoin";

const mapStateToProps = state => ({
  allCoinIds: state.coins.allCoinIds,
  error: state.coins.error
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
)(withTheme(AddCoin));
