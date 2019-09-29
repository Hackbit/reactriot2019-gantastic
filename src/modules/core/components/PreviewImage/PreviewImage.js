import React, { useState } from 'react';
import PropTypes from 'prop-types';

import DeleteButton from '../DeleteButton';
import Loader from '../Loader';

import {
  StyledImageWrapper,
  StyledPreviewImage,
  StyledPositionWrapper,
} from './styled';


const PreviewImage = (props) => {
  const {
    alt,
    className,
    fallbackToLoader,
    fileName,
    onDelete,
    src,
    style,
  } = props;

  const [deleting, setDeleting] = useState(false);

  const contents = src ? (
    <>
      {!!onDelete && (
        <DeleteButton
          onClick={() => {
            setDeleting(true);
            onDelete(src, fileName);
          }}
        />
      )}

      <StyledImageWrapper deleting={deleting}>
        <StyledPreviewImage
          alt={alt}
          className={className}
          src={src}
          style={style}
        />
      </StyledImageWrapper>
    </>
  ) : fallbackToLoader && <Loader />;

  return (
    <StyledPositionWrapper empty={!src}>
      {contents}
      {deleting && <Loader />}
    </StyledPositionWrapper>
  );
};

PreviewImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fallbackToLoader: PropTypes.bool,
  fileName: PropTypes.string,
  onDelete: PropTypes.func,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewImage.defaultProps = {
  alt: undefined,
  className: undefined,
  fallbackToLoader: true,
  fileName: undefined,
  src: undefined,
  style: undefined,
};


export default PreviewImage;
