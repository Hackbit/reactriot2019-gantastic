import React from 'react';
import PropTypes from 'prop-types';

import { StyledPageLayout } from './styled';


const PageLayout = ({ children }) => (
  <StyledPageLayout>
    {children}
  </StyledPageLayout>
);

PageLayout.propTypes = {
  children: PropTypes.node,
};

PageLayout.defaultProps = {
  children: undefined,
};


export default PageLayout;
