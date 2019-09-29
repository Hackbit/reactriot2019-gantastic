import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledPreviewImage,
} from './styled';


const PreviewImage = ({ alt, className, src, style }) => (
  <StyledPreviewImage
    alt={alt}
    className={className}
    src={src}
    style={style}
  />
);

PreviewImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewImage.defaultProps = {
  alt: undefined,
  className: undefined,
  src: undefined,
  style: undefined,
};


export default PreviewImage;
