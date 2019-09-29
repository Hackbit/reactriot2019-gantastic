import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { DeviceUtils } from 'utils'

import { Auth } from 'services';

import { constants } from 'modules/router';

import { Nav, PageLayout, Title } from 'modules/core/components';


const uiConfig = {
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

  const isMobile = DeviceUtils.isMobile.any();
  const fireUiConfig = isMobile ? uiConfig : {
    ...uiConfig,
    signInFlow: 'popup',
  };

  return (
    <>
      <PageLayout>
        <div>
          <Title>Please sign in</Title>

          <StyledFirebaseAuth
            uiConfig={fireUiConfig}
            firebaseAuth={Auth.shared}
          />
        </div>
      </PageLayout>

      <Nav
        items={constants.anonRoutes}
        selectedItem="Login"
      />
    </>
  );
};

UserAuth.propTypes = {
  isFetching: PropTypes.bool.isRequired,
};


export default UserAuth;
