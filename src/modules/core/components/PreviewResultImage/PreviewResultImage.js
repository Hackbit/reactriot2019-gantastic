import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { DeviceUtils } from 'utils';

import { icons, variants } from 'modules/core/constants';

import Button from '../Button';
import ImageUpload from '../ImageUpload';
import PreviewImage from '../PreviewImage';
import Title from '../Title';

import {
  StyledImageSection,
  StyledOptionsSection,
  StyledResultLineWrapper,
} from './styled';

const italicTitleStyles = css`
  margin-top: 20px;
  font-style: italic;
`;


const PreviewResultImage = (props) => {
  const {
    alt,
    className,
    imageSliderValues,
    imageUrls,
    isGenerating,
    isRetrieving,
    onButtonClick,
    onFilesChange,
    onReset,
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

  const genText = DeviceUtils.isMobile.any() ? ' Generate ' : 'Generate Result';

  return (
    <>
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
            {genText}
          </Button>
        </StyledOptionsSection>

        <StyledImageSection>
          <PreviewImage
            alt={alt}
            className={className}
            fallbackIcon={icons.UNKNOWN}
            fallbackToLoader={isGenerating || isRetrieving}
            loaderVariant={isGenerating ? variants.spinner.BASE : variants.spinner.BRAND}
            isBigger
            src={src}
            style={style}
          />
        </StyledImageSection>
      </StyledResultLineWrapper>
      {isGenerating && (
        <Title css={italicTitleStyles}>(This can take 1 to 2 minutes)</Title>
      )}
      {isRetrieving && (
        <Title css={italicTitleStyles}>Retrieving your result!</Title>
      )}
      {!!src && (
        <Button
          iconLeft={icons.RESET}
          isCentered
          onClick={onReset}
          style={{ marginTop: '20px' }}
        >
          Reset
        </Button>
      )}
    </>
  );
};

PreviewResultImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imageSliderValues: PropTypes.shape(),
  imageUrls: PropTypes.arrayOf(PropTypes.string),
  isGenerating: PropTypes.bool,
  isRetrieving: PropTypes.bool,
  onButtonClick: PropTypes.func.isRequired,
  onFilesChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewResultImage.defaultProps = {
  alt: undefined,
  className: undefined,
  imageSliderValues: {},
  imageUrls: [],
  isGenerating: false,
  isRetrieving: false,
  src: undefined,
  style: undefined,
};


export default PreviewResultImage;
