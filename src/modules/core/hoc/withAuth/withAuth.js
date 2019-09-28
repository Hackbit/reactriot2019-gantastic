import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Auth } from 'services';


const withAuth = (Component) => {
  const ComponentWithAuth = (props) => {
    const {
      isFetching,
      onLoginFailure,
      onLoginSuccess,
      ...rest
    } = props;

    useEffect(() => {
      function handleAuthChange(user) {
        if (user && isFetching) {
          onLoginSuccess(user);
        } else if (!user) {
          onLoginFailure();
        }
      }

      const unregister = Auth.shared.onAuthStateChanged(handleAuthChange);

      return function cleanup() {
        unregister();
      }
    });

    return <Component isFetching={isFetching} {...rest} />;
  };

  ComponentWithAuth.propTypes = {
    isAuthenticated: PropTypes.bool,
    isFetching: PropTypes.bool,
    onLoginFailure: PropTypes.func.isRequired,
    onLoginSuccess: PropTypes.func.isRequired,
  };

  ComponentWithAuth.defaultProps = {
    isFetching: true,
  };

  return ComponentWithAuth;
};


export default withAuth;
