import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { constants } from 'modules/router';


const AuthRoute = (props) => {
  const {
    Component,
    isAuthenticated,
    isFetching,
    path,
    ...rest
  } = props;

  if (isFetching) {
    return <div />;
  } else if (!isAuthenticated) {
    return <Redirect to={constants.Routes.FACES} />;
  }

  return (
    <Route
      {...rest}
      component={Component}
      path={path}
    />
  );
};

AuthRoute.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func,
};

AuthRoute.defaultProps = {
  isAuthenticated: undefined,
};


export default AuthRoute;
