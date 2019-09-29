import React from 'react';
import PropTypes from 'prop-types';

import { icons } from 'modules/core/constants';

import Button from '../Button';
import ImageUpload from '../ImageUpload';
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
    onFilesChange,
    src,
    style,
  } = props;

  const handleGenerateButtonClick = () => {
    const configs = { ...imageSliderValues };

    imageUrls.forEach((u) => {
      if (!configs[u]) configs[u] = 0.1;
    });

    onButtonClick(configs);
  };

  return (
    <>
      {/*<StyledResultPreviewText>*/}
      {/*  Add images and generate to preview*/}
      {/*</StyledResultPreviewText>*/}
      <StyledResultLineWrapper>
        <StyledOptionsSection>
          <ImageUpload
            accept="image/*"
            icon={icons.UPLOAD}
            label="Add Images"
            name="fileList"
            onChange={onFilesChange}
          />
          <Button
            isCentered
            isDisabled={imageUrls.length === 0}
            isSuccess
            iconLeft={icons.FACE}
            onClick={handleGenerateButtonClick}
          >
            Generate Result
          </Button>
        </StyledOptionsSection>

        <StyledImageSection>
          <PreviewImage
            alt={alt}
            fallbackIcon={icons.UNKNOWN}
            fallbackToLoader={false}
            isBigger
            className={className}
            src={src}
            style={style}
          />
        </StyledImageSection>
      </StyledResultLineWrapper>
    </>
  );
};

PreviewResultImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imageSliderValues: PropTypes.shape(),
  imageUrls: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func.isRequired,
  onFilesChange: PropTypes.func.isRequired,
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
