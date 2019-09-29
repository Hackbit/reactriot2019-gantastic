import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import {
  StyledFileInput,
  StyledFileInputLabel,
} from './styled';


const ImageUpload = ({ icon, label, name, onChange }) => (
  <>
    <StyledFileInput
      accept="image/*"
      id={name}
      type="file"
      multiple
      name={name}
      onChange={onChange}
    />
    <StyledFileInputLabel htmlFor={name}>
      {!!icon && <Icon icon={icon} />}

      {label}
    </StyledFileInputLabel>
  </>
);

ImageUpload.propTypes = {
  icon: PropTypes.shape(),
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

ImageUpload.defaultProps = {
  icon: undefined,
  name: undefined,
  onChange: undefined,
};


export default ImageUpload;
