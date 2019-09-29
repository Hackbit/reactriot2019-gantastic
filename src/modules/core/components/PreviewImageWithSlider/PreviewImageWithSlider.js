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
    max,
    min,
    onChange,
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
          className={className}
          src={src}
          style={style}
        />
      </StyledImageSection>

      <StyledSliderSection>
        <Slider
          label=""
          max={max}
          min={min}
          step={step}
          onChange={(evt) => {
            const { value } = evt.target;
            setSliderValue(value);
            onChange(value);
          }}
          value={sliderValue}
        />

        <StyledNumberInput
          max={max}
          min={min}
          onChange={(evt) => {
            const { value } = evt.target;
            setSliderValue(value);
            onChange(value);
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
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  src: PropTypes.string,
  step: PropTypes.number,
  style: PropTypes.shape(),
  value: PropTypes.number.isRequired,
};

PreviewImageWithSlider.defaultProps = {
  alt: undefined,
  className: undefined,
  max: 2,
  min: -2,
  src: undefined,
  step: 0.1,
  style: undefined,
};


export default PreviewImageWithSlider;
