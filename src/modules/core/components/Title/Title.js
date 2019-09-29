import React from 'react';
import PropTypes from 'prop-types';

import { StyledTitle } from './styled';


const Title = ({ children, css }) => (
  <StyledTitle css={css}>
    {children}
  </StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node,
  css: PropTypes.any,
};

Title.defaultProps = {
  children: undefined,
  css: undefined,
};


export default Title;
