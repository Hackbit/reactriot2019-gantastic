import styled from 'styled-components';

import { colors, styles } from 'modules/core/constants';


const StyledResultLineWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImageSection= styled.div`
  ${styles.previewLineThinColStyles}
`;

const StyledOptionsSection = styled.div`
  ${styles.resultPreviewLineWideColStyles}
`;

const StyledResultPreviewText = styled.h1`
  font-size: 18px;
  color: ${colors.text};
  margin: 0 0 10px 0;
  padding: 0 10px;
  opacity: 0.5;
`;


export {
  StyledResultLineWrapper,
  StyledImageSection,
  StyledOptionsSection,
  StyledResultPreviewText,
};
