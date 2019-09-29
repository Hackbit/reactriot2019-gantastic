import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { icons } from 'modules/core/constants';
import { constants } from 'modules/router';

import { Button, Nav, PageLayout, Title } from 'modules/core/components';

import { PageSection } from './styled';


const Home = ({ history }) => {
  return (
    <>
      <PageLayout css={css`justify-content: flex-start;`}>
        <PageSection>
          <Title>Face Tricks</Title>
          <Button
            iconLeft={icons.FACE}
            onClick={() => {
              history.push(constants.Routes.FACES);
            }}
          >
            Try the Generator
          </Button>
          <Title css={css`margin-top: 20px;`}>Built during ReactRiot 2019</Title>
        </PageSection>
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem="Home"
      />
    </>
  );
};

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Home;
