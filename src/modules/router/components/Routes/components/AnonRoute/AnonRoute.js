import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { constants } from 'modules/router';


const AnonRoute = (props) => {
  const {
    Component,
    isAuthenticated,
    isFetching,
    path,
    ...rest
  } = props;

  if (isFetching) {
    return <div>Loading...</div>;
  } else if (isAuthenticated) {
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

AnonRoute.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

AnonRoute.defaultProps = {
  isAuthenticated: undefined,
};


export default AnonRoute;
