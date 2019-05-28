import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTheme } from 'styled-components';

import { setTheme } from '../../redux/modules/cryptocompare/actions';

import RootContainer from './RootContainer';

const mapStateToProps = state => ({
  themeSelected: state.cryptocompare.theme
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
