import React from 'react';
import PropTypes from 'prop-types';

import { icons } from 'modules/core/constants';

import Icon from '../Icon';

import { StyledDeleteButton } from './styled';


const DeleteButton = (props) => {
  const {
    className,
    isDisabled,
    onClick,
    style,
    type,
  } = props;

  return (
    <StyledDeleteButton
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      style={style}
      type={type}
    >
      <Icon icon={icons.DELETE} />
    </StyledDeleteButton>
  );
};

DeleteButton.propTypes = {
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.shape(),
  type: PropTypes.string,
};

DeleteButton.defaultProps = {
  className: undefined,
  isDisabled: false,
  onClick: undefined,
  style: undefined,
  type: 'button',
};


export default DeleteButton;
