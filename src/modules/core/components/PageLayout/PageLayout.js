import React from 'react';
import PropTypes from 'prop-types';

import { StyledPageLayout } from './styled';


const PageLayout = ({ children, css }) => (
  <StyledPageLayout css={css}>
    {children}
  </StyledPageLayout>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  css: PropTypes.any,
};

PageLayout.defaultProps = {
  children: undefined,
  css: undefined,
};


export default PageLayout;
