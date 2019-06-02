import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";

import PortfolioTopbar from "./PortfolioTopbar";

const mapStateToProps = state => ({
  data: state.coins.data,
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
)(withTheme(PortfolioTopbar));
