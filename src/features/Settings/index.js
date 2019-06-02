import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";

import { setTheme } from "../../redux/modules/properties/actions";

import Settings from "./Settings";

const mapStateToProps = state => ({
  data: state.coins.data,
  error: state.coins.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setTheme
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(Settings));
