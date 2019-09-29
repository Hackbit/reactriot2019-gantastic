import React from 'react';
import PropTypes from 'prop-types';

import { StyledCard } from './styled';


const Card = (props) => {
  const {
    children,
    className,
    isTranslucent,
    style,
  } = props;

  return (
    <StyledCard
      className={className}
      style={style}
      translucent={isTranslucent}
    >
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isTranslucent: PropTypes.bool,
  style: PropTypes.shape(),
};

Card.defaultProps = {
  children: undefined,
  className: undefined,
  isTranslucent: false,
  style: undefined,
};


export default Card;
