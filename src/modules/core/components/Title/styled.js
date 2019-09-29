import styled from 'styled-components';

import { colors } from 'modules/core/constants';


const StyledTitle = styled.h1`
  color: ${colors.text};
  font-size: 18px;
  margin-bottom: 20px;
  ${props => props.css || ''}
`;


export {
  StyledTitle,
};
