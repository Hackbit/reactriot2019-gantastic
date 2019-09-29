import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledButton = styled.button`
  ${styles.buttonStyles}

  ${props => props.ghost ? styles.ghostButtonStyles : ''}
`;


export {
  StyledButton,
};
