import React from 'react';
import PropTypes from 'prop-types';


const ImageUpload = ({ name, onChange }) => (
  <input
    accept="image/*"
    type="file"
    multiple
    name={name}
    onChange={onChange}
  />
);

ImageUpload.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

ImageUpload.defaultProps = {
  name: undefined,
  onChange: undefined,
};


export default ImageUpload;
