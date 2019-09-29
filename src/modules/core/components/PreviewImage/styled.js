import styled from 'styled-components';

import { colors, styles } from 'modules/core/constants';


const StyledPositionWrapper = styled.div`
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(136, 152, 170, 0.5);
  border: solid 2px ${colors.smoke};
  background-color: ${colors.white};

  ${styles.imageWrapperStyles}

  ${props => props.bigger ? styles.biggerImageWrapperStyles : ''}
`;

const StyledImageWrapper = styled.div`
  overflow: hidden;

  ${styles.imageWrapperStyles}

  ${props => props.empty ? styles.emptyContentStyles : ''}
  ${props => props.deleting ? styles.deletingContentStyles : ''}
  ${props => props.bigger ? styles.biggerImageWrapperStyles : ''}
`;

const StyledPreviewImage = styled.img`
  display: block;
  border-radius: 22px;
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
