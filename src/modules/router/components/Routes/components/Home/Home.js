import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { icons } from 'modules/core/constants';
import { constants } from 'modules/router';

import { Button, Nav, PageLayout, Title } from 'modules/core/components';

import { PageSection } from './styled';


const Home = ({ history, isAuthenticated }) => {
  return (
    <>
      <PageLayout css={css`justify-content: flex-start;`}>
        <PageSection>
          <Title>Welcome to Face Tricks</Title>
          <Title css={css`margin-top: 20px;`}>
            Upload any number of photos, and Face Tricks will combine them to show you what
            the offspring of the photo subjects might look like!
          </Title>
          <Button
            iconLeft={icons.FACE}
            onClick={() => {
              history.push(constants.Routes.FACES);
            }}
          >
            Try the Generator
          </Button>
          <Title css={css`margin-top: 20px; font-style: italic;`}>Built during ReactRiot 2019</Title>
        </PageSection>
      </PageLayout>

      {isAuthenticated && (
        <Nav
          items={constants.authRoutes}
          selectedItem="Home"
        />
      )}

      {!isAuthenticated && (
        <Nav
          items={constants.anonRoutes}
          selectedItem="Home"
        />
      )}
    </>
  );
};

Home.propTypes = {
  history: PropTypes.shape().isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Home;
