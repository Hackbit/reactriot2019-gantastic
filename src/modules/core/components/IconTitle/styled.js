import styled, { css } from 'styled-components';

import { colors } from 'modules/core/constants';


const StyledTitleIconWrapper = styled.div`
  color: ${colors.text};
  text-align: left;
  padding-left: 20px;
  
  span {
    vertical-align: middle;
    margin-right: 8px;
  }
`;

const titleStyles = css`
  padding-bottom: 4px;
`;


export {
  StyledTitleIconWrapper,
  titleStyles,
};
