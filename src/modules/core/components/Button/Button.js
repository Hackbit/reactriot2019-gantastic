import React from 'react';
import { Button as RSuiteButton } from 'rsuite';


const Button = (props) => (
  <RSuiteButton {...props} />
);

Button.defaultProps = {
  color: 'cyan',
  children: undefined,
  icon: undefined,
  onClick: undefined,
};


export default Button;
