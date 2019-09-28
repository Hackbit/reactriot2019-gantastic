import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

import { constants } from 'modules/router';


const AnonRoute = (props) => {
  const {
    Component,
    history,
    isAuthenticated,
    isFetching,
    path,
    ...rest
  } = props;

  if (isAuthenticated && !isFetching) {
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
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  history: PropTypes.shape().isRequired,
  isAuthenticated: PropTypes.bool,
  isFetching: PropTypes.bool.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]).isRequired,
  render: PropTypes.func,
};

AnonRoute.defaultProps = {
  isAuthenticated: undefined,
};


export default AnonRoute;
