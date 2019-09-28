import React from 'react';
import { Input } from 'rsuite';


const TextInput = (props) => (
  <Input {...props} />
);

TextInput.defaultProps = {
  size: 'lg',
};


export default TextInput;
