import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledCard = styled.article`
  ${styles.cardStyles}

  ${props => props.translucent ? styles.cardTranslucentStyles : ''}
`;


export {
  StyledCard,
};
