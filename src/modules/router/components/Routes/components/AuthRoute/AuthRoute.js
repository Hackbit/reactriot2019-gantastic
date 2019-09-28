import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { constants } from 'modules/router';


const AuthRoute = (props) => {
  const {
    Component,
    history,
    isAuthenticated,
    isFetching,
    path,
    ...rest
  } = props;

  if (isFetching) {
    return null;
  }

  if (!isAuthenticated) {
    return <Redirect to={constants.Routes.AUTH} />
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
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  history: PropTypes.shape().isRequired,
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  render: PropTypes.func,
};

AuthRoute.defaultProps = {
  isAuthenticated: undefined,
};


export default AuthRoute;
