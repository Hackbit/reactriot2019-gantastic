import React from 'react';

import { constants } from 'modules/router';

import { Nav, PageLayout, Title } from 'modules/core/components';

import { PageSection } from './styled';


const Home = () => {
  return (
    <>
      <PageLayout>
        <PageSection>
          <Title>Face Tricks</Title>
          <Title>Check it out</Title>
          <Title>Built during ReactRiot 2019</Title>
        </PageSection>
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem="Home"
      />
    </>
  );
};


export default Home;
