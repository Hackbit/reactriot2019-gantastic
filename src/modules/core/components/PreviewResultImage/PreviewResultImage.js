import React from 'react';
import PropTypes from 'prop-types';

import { icons } from 'modules/core/constants';

import Button from '../Button';
import Card from '../Card';
import PreviewImage from '../PreviewImage';

import {
  StyledImageSection,
  StyledOptionsSection,
  StyledResultLineWrapper,
  StyledResultPreviewText,
} from './styled';


const PreviewResultImage = (props) => {
  const {
    alt,
    className,
    imageSliderValues,
    imageUrls,
    onButtonClick,
    src,
    style,
  } = props;

  return (
    <Card isTranslucent>
      <StyledResultLineWrapper>
        <StyledOptionsSection>
          <StyledResultPreviewText>
            A preview of your
            baby photo
          </StyledResultPreviewText>
          <Button
            isDisabled={imageUrls.length === 0}
            iconLeft={icons.FACE}
            onClick={() => {
              const configs = { ...imageSliderValues };

              imageUrls.forEach((u) => {
                if (!configs[u]) {
                  configs[u] = 0.1;
                }
              });

              onButtonClick(configs);
            }}
            style={{ margin: '0 auto' }}
          >
            Generate
          </Button>
        </StyledOptionsSection>

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
    </Card>
  );
};

PreviewResultImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imageSliderValues: PropTypes.shape(),
  imageUrls: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewResultImage.defaultProps = {
  alt: undefined,
  className: undefined,
  imageSliderValues: {},
  imageUrls: [],
  src: undefined,
  style: undefined,
};


export default PreviewResultImage;
