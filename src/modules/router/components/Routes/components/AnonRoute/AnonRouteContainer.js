import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors } from 'modules/user';

import AnonRoute from './AnonRoute';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
  isFetching: selectors.getIsFetching,
});


export default connect(mapStateToProps)(AnonRoute);
