import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Auth } from 'services';


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

const UserAuth = () => (
  <div>
    <span>Please sign in</span>

    <StyledFirebaseAuth
      uiConfig={uiConfig}
      firebaseAuth={Auth.shared}
    />
  </div>
);


export default UserAuth;
