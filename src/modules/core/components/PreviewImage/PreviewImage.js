import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { variants } from 'modules/core/constants';

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
    loaderVariant,
    onClick,
    onDelete,
    src,
    style,
  } = props;

  const [deleting, setDeleting] = useState(false);

  const srcContents = !!src && (
    <>
      {!!onDelete && (
        <DeleteButton
          onClick={(evt) => {
            evt.stopPropagation();
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
          onClick={onClick}
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

      {!src && fallbackToLoader && <Loader variant={loaderVariant} />}

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
  loaderVariant: PropTypes.string,
  onClick: PropTypes.func,
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
  loaderVariant: variants.spinner.BASE,
  src: undefined,
  style: undefined,
};


export default PreviewImage;
