import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledIconWrapper } from './styled';


const Icon = (props) => {
  const {
    className,
    icon,
    left,
  } = props;

  return (
    <StyledIconWrapper
      className={className}
      left={left}
    >
      <FontAwesomeIcon icon={icon} />
    </StyledIconWrapper>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.shape(),
  left: PropTypes.bool,
};

Icon.defaultProps = {
  className: undefined,
  icon: undefined,
  left: true,
};


export default Icon;
