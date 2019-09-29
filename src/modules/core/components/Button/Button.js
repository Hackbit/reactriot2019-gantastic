import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import { StyledButton } from './styled';


const Button = (props) => {
  const {
    children,
    className,
    iconLeft,
    iconRight,
    isDisabled,
    isGhost,
    onClick,
    style,
    type,
  } = props;

  return (
    <StyledButton
      className={className}
      disabled={isDisabled}
      ghost={isGhost}
      onClick={onClick}
      style={style}
      type={type}
    >
      {!!iconLeft && <Icon icon={iconLeft} />}
      <span>{children}</span>
      {!!iconRight && <Icon icon={iconRight} left={false} />}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  isDisabled: PropTypes.bool,
  isGhost: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  type: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  isDisabled: false,
  isGhost: false,
  onClick: undefined,
  style: undefined,
  type: 'button',
};


export default Button;
