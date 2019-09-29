import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import {
  StyledImageWrapper,
  StyledPreviewImage,
} from './styled';


const PreviewImage = ({ alt, className, fallbackToLoader, src, style }) => {
  const contents = src ? (
    <StyledPreviewImage
      alt={alt}
      className={className}
      src={src}
      style={style}
    />
  ) : fallbackToLoader && <Loader />;

  return (
    <StyledImageWrapper empty={!src}>
      {contents}
    </StyledImageWrapper>
  );
};

PreviewImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fallbackToLoader: PropTypes.bool,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewImage.defaultProps = {
  alt: undefined,
  className: undefined,
  fallbackToLoader: true,
  src: undefined,
  style: undefined,
};


export default PreviewImage;
