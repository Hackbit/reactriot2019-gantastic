import React from 'react';
import PropTypes from 'prop-types';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { css } from 'styled-components';

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
      <PageLayout css={css`padding-left: 20px; padding-right: 20px;`}>
        <div>
          <Title>Choose a sign-in provider:</Title>

          <StyledFirebaseAuth
            uiConfig={fireUiConfig}
            firebaseAuth={Auth.shared}
          />

          <Title css={css`font-style: italic; margin-top: 40px; opacity: 0.5;`}>
            We store only your user ID, and the images you upload.
            <br />
            Signing in helps us keep your image URLs private.
          </Title>
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
