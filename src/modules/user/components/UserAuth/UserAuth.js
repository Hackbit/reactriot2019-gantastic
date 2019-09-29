import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { Auth } from 'services';

import { constants } from 'modules/router';

import { Nav, PageLayout } from 'modules/core/components';


const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/faces',
  signInOptions: [
    Auth.singleton.TwitterAuthProvider.PROVIDER_ID,
    Auth.singleton.GithubAuthProvider.PROVIDER_ID,
    Auth.singleton.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const UserAuth = (props) => {
  const { isFetching } = props;

  if (isFetching) {
    return null;
  }

  return (
    <>
      <PageLayout>
        <div>
          <span>Please sign in</span>

          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={Auth.shared}
          />
        </div>
      </PageLayout>

      <Nav
        items={constants.anonRoutes}
        selectedItem={constants.anonRoutes[0].name}
      />
    </>
  );
};

UserAuth.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};


export default UserAuth;
