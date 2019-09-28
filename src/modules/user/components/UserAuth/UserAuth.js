import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Auth } from 'services';

import { Button } from 'modules/core/components';


const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    Auth.singleton.TwitterAuthProvider.PROVIDER_ID,
    Auth.singleton.GithubAuthProvider.PROVIDER_ID,
    Auth.singleton.PhoneAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const UserAuth = (props) => {
  const {
    isAuthenticated,
    onLoginFailure,
    onLoginSuccess,
  } = props;

  useEffect(() => {
    function handleAuthChange(user) {
      if (user) {
        onLoginSuccess(user);
      } else {
        onLoginFailure();
      }
    }

    const unregisterAuthObserver = Auth.shared.onAuthStateChanged(handleAuthChange);

    return function cleanup() {
      unregisterAuthObserver();
    };
  });

  return (
    <div>
      {isAuthenticated !== undefined && !isAuthenticated && (
        <React.Fragment>
          <span>Please sign in</span>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={Auth.shared}
          />
        </React.Fragment>
      )}

      {isAuthenticated && (
        <React.Fragment>
          <span>{`Hello ${Auth.shared.currentUser.displayName}!`}</span>

          <br />

          <Button
            onClick={() => Auth.shared.signOut()}
            type="button"
          >
            Logout
          </Button>
        </React.Fragment>
      )}
    </div>
  );
};

UserAuth.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLoginFailure: PropTypes.func.isRequired,
  onLoginSuccess: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

UserAuth.defaultProps = {
  isAuthenticated: undefined,
  userId: undefined,
};


export default UserAuth;
