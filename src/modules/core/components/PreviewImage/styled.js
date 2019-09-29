import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledImageWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 0 2px 0 #a4a7b5;
  height: 120px;
  width: 120px;
  position: relative;

  ${props => props.empty ? styles.emptyContentStyles : ''}
`;

const StyledPreviewImage = styled.img`
  display: block;
  border-radius: 10px;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
`;


export {
  StyledImageWrapper,
  StyledPreviewImage,
};
