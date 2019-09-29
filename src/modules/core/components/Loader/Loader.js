import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-rainbow-components';

import { sizes, variants } from 'modules/core/constants';

import { StyledSpinnerWrapper } from './styled';


const Loader = (props) => {
  const {
    assistiveText,
    size,
    variant,
  } = props;

  return (
    <StyledSpinnerWrapper>
      <Spinner
        assistiveText={assistiveText}
        size={size}
        variant={variant}
        style={{ alignSelf: 'center' }}
      />
    </StyledSpinnerWrapper>
  );
};

Loader.propTypes = {
  assistiveText: PropTypes.string,
  size: PropTypes.oneOf(Object.values(sizes.spinner)),
  variant: PropTypes.oneOf(Object.values(variants.spinner)),
};

Loader.defaultProps = {
  assistiveText: 'Loading image',
  size: sizes.spinner.MED,
  variant: variants.spinner.BASE,
};


export default Loader;
