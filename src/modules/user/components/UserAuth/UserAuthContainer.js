import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from 'modules/user';

import UserAuth from './UserAuth';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
  isFetching: selectors.getIsFetching,
});


export default connect(mapStateToProps)(UserAuth);
