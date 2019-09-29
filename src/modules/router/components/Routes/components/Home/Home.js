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
      <PageLayout
        css={css`justify-content: flex-start; padding-left: 20px; padding-right: 20px;`}
      >
        <PageSection>
          <Title>Welcome to Face Tricks</Title>
          <Title css={css`margin-top: 40px; margin-bottom: 40px;`}>
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
          <br />
          <Button
            id="vote-btn"
            isGhost
            style={{ marginTop: '40px' }}
            iconLeft={icons.HEART}
            onClick={() => {
              window.open('https://www.reactriot.com/entries/153-gantastic/vote');
            }}
          >
            Vote for team Gantastic on ReactRiot
          </Button>
          <Title css={css`margin-top: 40px; font-style: italic;`}>
            <iframe
              title="Star on Github"
              src="https://ghbtns.com/github-btn.html?user=Hackbit&repo=reactriot2019-gantastic&type=star&count=false&size=large"
              width="80px"
              height="30px"
              frameBorder="0"
              scrolling="0"
            /> on Github
          </Title>
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
  isAuthenticated: PropTypes.bool,
};

export default Home;
