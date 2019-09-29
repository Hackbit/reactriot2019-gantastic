import styled from 'styled-components';

import { colors } from 'modules/core/constants';


const StyledPageLayout = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  overflow: scroll;
  padding-bottom: 128px;
  padding-top: 78px;
  max-width: 540px;
  margin: 0 auto;
  ${props => props.css || ''}
`;


export {
  StyledPageLayout,
};
