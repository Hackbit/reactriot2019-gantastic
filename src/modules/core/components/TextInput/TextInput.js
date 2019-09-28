import React from 'react';
import PropTypes from 'prop-types';


const TextInput = (props) => {
  const {
    onBlur,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <input
      type="text"
    />
  );
};

TextInput.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  onBlur: undefined,
  onChange: undefined,
  placeholder: '',
  value: '',
};


export default TextInput;
