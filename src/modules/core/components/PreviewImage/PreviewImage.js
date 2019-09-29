import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
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
    fallbackIcon,
    fallbackToLoader,
    fileName,
    isBigger,
    onDelete,
    src,
    style,
  } = props;

  const [deleting, setDeleting] = useState(false);

  const srcContents = !!src && (
    <>
      {!!onDelete && (
        <DeleteButton
          onClick={() => {
            setDeleting(true);
            onDelete(src, fileName);
          }}
        />
      )}

      <StyledImageWrapper
        bigger={isBigger}
        deleting={deleting}
      >
        <StyledPreviewImage
          alt={alt}
          className={className}
          src={src}
          style={style}
        />
      </StyledImageWrapper>
    </>
  );

  return (
    <StyledPositionWrapper
      bigger={isBigger}
      empty={!src}
    >
      {srcContents}

      {!src && fallbackToLoader && <Loader />}

      {!src && !!fallbackIcon && <Icon icon={fallbackIcon} />}

      {deleting && <Loader />}
    </StyledPositionWrapper>
  );
};

PreviewImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  fallbackIcon: PropTypes.shape(),
  fallbackToLoader: PropTypes.bool,
  fileName: PropTypes.string,
  isBigger: PropTypes.bool,
  onDelete: PropTypes.func,
  src: PropTypes.string,
  style: PropTypes.shape(),
};

PreviewImage.defaultProps = {
  alt: undefined,
  className: undefined,
  fallbackIcon: undefined,
  fallbackToLoader: true,
  fileName: undefined,
  isBigger: false,
  src: undefined,
  style: undefined,
};


export default PreviewImage;
