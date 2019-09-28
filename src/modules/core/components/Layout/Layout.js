import React from 'react';
import PropTypes from 'prop-types';

import { StyledLayout } from './styled';


const Layout = ({ children }) => (
  <StyledLayout>
    {children}
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
};


export default Layout;
