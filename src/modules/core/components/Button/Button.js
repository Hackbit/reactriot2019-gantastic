import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled';


const Button = (props) => {
  const {
    children,
    className,
    icon,
    onClick,
    style,
    type,
  } = props;

  return (
    <StyledButton
      className={className}
      onClick={onClick}
      style={style}
      type={type}
    >
      {icon}
      <span>{children}</span>
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  type: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  icon: undefined,
  onClick: undefined,
  style: undefined,
  type: 'button',
};


export default Button;
