import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/user';

import UserAuth from './UserAuth';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
  userId: selectors.getId,
});

const mapDispatchToProps = {
  onLoginFailure: actions.userLoginFailure,
  onLoginSuccess: actions.userLoginSuccess,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);
