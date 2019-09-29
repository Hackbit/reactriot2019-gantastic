import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledDeleteButton = styled.button`
  ${styles.deleteButtonStyles}
  
  &:active, &:focus {
    outline: none;
  }
`;


export {
  StyledDeleteButton,
};
