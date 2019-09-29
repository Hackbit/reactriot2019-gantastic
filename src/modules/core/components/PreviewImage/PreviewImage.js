import React from 'react';
import PropTypes from 'prop-types';

import DeleteButton from '../DeleteButton';
import Loader from '../Loader';

import {
  StyledImageWrapper,
  StyledPreviewImage,
} from './styled';


const PreviewImage = ({ alt, className, fallbackToLoader, onDelete, src, style }) => {
  const contents = src ? (
    <>
      {!!onDelete && <DeleteButton onClick={onDelete} />}

      <StyledPreviewImage
        alt={alt}
        className={className}
        src={src}
        style={style}
      />
    </>
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
  onDelete: PropTypes.func,
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
