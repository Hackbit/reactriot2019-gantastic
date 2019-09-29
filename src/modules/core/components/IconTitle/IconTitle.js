import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Title from '../Title';

import { StyledTitleIconWrapper, titleStyles } from './styled';


const IconTitle = ({ children, icon }) => (
  <StyledTitleIconWrapper>
    <Title css={titleStyles}>
      <Icon icon={icon} />
      <span>{children}</span>
    </Title>
  </StyledTitleIconWrapper>
);

IconTitle.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.shape(),
};

IconTitle.defaultProps = {
  children: undefined,
  icon: undefined,
};


export default IconTitle;
