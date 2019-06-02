import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withTheme } from "styled-components";

import { setTheme } from "../../redux/modules/properties/actions";

import RootContainer from "./RootContainer";

const mapStateToProps = state => ({
  themeSelected: state.properties.theme
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      //   setTheme
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(RootContainer));
