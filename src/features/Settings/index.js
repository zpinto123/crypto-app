import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTheme } from 'styled-components';

import { setTheme } from '../../redux/modules/cryptocompare/actions';

import Settings from './Settings';

const mapStateToProps = state => ({
  data: state.cryptocompare.data,
  error: state.cryptocompare.error
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
