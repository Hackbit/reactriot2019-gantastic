import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-rainbow-components';

import PreviewImage from '../PreviewImage';

import {
  StyledImageSection,
  StyledOptionsSection,
  StyledResultLineWrapper,
} from './styled';


const PreviewResultImage = (props) => {
  const {
    alt,
    className,
    src,
    style,
  } = props;

  return (
    <StyledResultLineWrapper>
      <StyledOptionsSection />

      <StyledImageSection>
        <PreviewImage
          alt={alt}
          fallbackToLoader={false}
          className={className}
          src={src}
          style={style}
        />
      </StyledImageSection>
    </StyledResultLineWrapper>
  );
};

PreviewResultImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewResultImage.defaultProps = {
  alt: undefined,
  className: undefined,
  src: undefined,
  style: undefined,
};


export default PreviewResultImage;
