import styled from 'styled-components';

import { colors, styles } from 'modules/core/constants';


const StyledPositionWrapper = styled.div`
  position: relative;
  box-shadow: 0 0 2px 0 ${colors.shadow};
  ${styles.imageWrapperStyles}
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;

  ${props => props.empty ? styles.emptyContentStyles : ''}
  ${props => props.deleting ? styles.deletingContentStyles : ''}

  ${styles.imageWrapperStyles}
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
  StyledPositionWrapper,
};
