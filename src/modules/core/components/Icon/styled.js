import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledIconWrapper = styled.span`
  display: inline-block;

  ${props => props.left ? styles.iconLeftStyles : ''}

  ${props => !props.left ? styles.iconRightStyles : ''}
`;


export {
  StyledIconWrapper,
};
