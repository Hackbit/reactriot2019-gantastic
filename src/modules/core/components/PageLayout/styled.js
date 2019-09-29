import styled from 'styled-components';

import { colors } from 'modules/core/constants';


const StyledPageLayout = styled.div`
  background-color: ${colors.darkBg};
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: scroll;
  padding-bottom: 128px;
  padding-top: 88px;
  ${props => props.css || ''}
`;


export {
  StyledPageLayout,
};
