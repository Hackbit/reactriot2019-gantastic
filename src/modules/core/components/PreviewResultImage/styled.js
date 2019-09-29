import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledResultLineWrapper = styled.div`
  display: flex;
`;

const StyledImageSection= styled.div`
  ${styles.previewLineThinColStyles}
`;

const StyledOptionsSection = styled.div`
  ${styles.resultPreviewLineWideColStyles}
`;

const StyledResultPreviewText = styled.h1`
  font-size: 1rem;
  margin: 0 0 10px 0;
  padding: 0 10px;
  opacity: 0.8;
`;


export {
  StyledResultLineWrapper,
  StyledImageSection,
  StyledOptionsSection,
  StyledResultPreviewText,
};
