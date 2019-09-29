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
    id,
    isCentered,
    isDisabled,
    isGhost,
    isSuccess,
    onClick,
    style,
    type,
  } = props;

  return (
    <StyledButton
      centered={isCentered}
      className={className}
      disabled={isDisabled}
      ghost={isGhost}
      id={id}
      onClick={onClick}
      style={style}
      success={isSuccess}
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
  id: PropTypes.string,
  isCentered: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isGhost: PropTypes.bool,
  isSuccess: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  type: PropTypes.string,
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  iconLeft: undefined,
  iconRight: undefined,
  id: undefined,
  isCentered: false,
  isDisabled: false,
  isGhost: false,
  isSuccess: false,
  onClick: undefined,
  style: undefined,
  type: 'button',
};


export default Button;
