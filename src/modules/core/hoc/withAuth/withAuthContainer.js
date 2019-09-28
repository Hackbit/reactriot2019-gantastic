import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/user';

import withAuth from './withAuth'


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
  isFetching: selectors.getIsFetching,
});

const mapDispatchToProps = {
  onLoginFailure: actions.userLoginFailure,
  onLoginSuccess: actions.userLoginSuccess,
};

const enhance = compose(connect(mapStateToProps, mapDispatchToProps), withAuth);


export default Component => enhance(Component);
