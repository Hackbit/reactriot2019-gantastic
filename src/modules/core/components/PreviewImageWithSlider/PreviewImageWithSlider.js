import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-rainbow-components';

import PreviewImage from '../PreviewImage';

import {
  StyledImageSection,
  StyledImageSliderWrapper,
  StyledSliderSection,
  StyledNumberInput,
} from './styled';


const PreviewImageWithSlider = (props) => {
  const {
    alt,
    className,
    fileName,
    isDisabled,
    max,
    min,
    onChange,
    onDelete,
    src,
    step,
    style,
  } = props;

  const [sliderValue, setSliderValue] = useState(0.1);

  return (
    <StyledImageSliderWrapper>
      <StyledImageSection>
        <PreviewImage
          alt={alt}
          fileName={fileName}
          className={className}
          onDelete={onDelete}
          src={src}
          style={style}
        />
      </StyledImageSection>

      <StyledSliderSection>
        <Slider
          disabled={isDisabled || !src}
          label=""
          max={max}
          min={min}
          step={step}
          onChange={(evt) => {
            const { value } = evt.target;
            setSliderValue(value);
            onChange(src, value);
          }}
          value={sliderValue}
        />

        <StyledNumberInput
          disabled={!src}
          max={max}
          min={min}
          onChange={(evt) => {
            const { value } = evt.target;
            setSliderValue(value);
            onChange(src, value);
          }}
          step={step}
          type="number"
          value={sliderValue}
        />
      </StyledSliderSection>
    </StyledImageSliderWrapper>
  );
};

PreviewImageWithSlider.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fileName: PropTypes.string,
  isDisabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  src: PropTypes.string,
  step: PropTypes.number,
  style: PropTypes.shape(),
};

PreviewImageWithSlider.defaultProps = {
  alt: undefined,
  className: undefined,
  fileName: undefined,
  isDisabled: false,
  max: 2,
  min: -2,
  src: undefined,
  step: 0.1,
  style: undefined,
};


export default PreviewImageWithSlider;
