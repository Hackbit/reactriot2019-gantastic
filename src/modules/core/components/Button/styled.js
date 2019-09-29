import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledButton = styled.button`
  ${styles.buttonStyles}

  ${props => props.ghost ? styles.ghostButtonStyles : ''}

  ${props => props.centered ? styles.centeredStyles : ''}

  ${props => props.success ? styles.successButtonStyles : ''}

  ${props => props.disabled ? styles.disabledButtonStyles : ''}
  
  &:focus, &:active {
    outline: none;
  }
`;


export {
  StyledButton,
};
