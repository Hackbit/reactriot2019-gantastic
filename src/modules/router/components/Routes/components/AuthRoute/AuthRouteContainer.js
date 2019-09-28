import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectors } from 'modules/user';

import AuthRoute from './AuthRoute';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectors.getIsAuth,
  isFetching: selectors.getIsFetching,
});


const enhance = compose(connect(mapStateToProps), withRouter);


export default enhance(AuthRoute);
