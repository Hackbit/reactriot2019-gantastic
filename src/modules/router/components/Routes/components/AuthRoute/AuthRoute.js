import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from '@reach/router';

import { constants } from 'modules/router';


const AuthRoute = (props) => {
  const {
    Component,
    isAuthenticated,
    isFetching,
  } = props;

  if (isFetching) {
    return <div>Loading...</div>;
  } else if (!isAuthenticated) {
    return <Redirect to={constants.Routes.AUTH} />;
  }

  return <Component />;
};

AuthRoute.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
};

AuthRoute.defaultProps = {
  isAuthenticated: undefined,
};


export default AuthRoute;
