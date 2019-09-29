import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledResultLineWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 0 0 20px 0;
`;

const StyledImageSection= styled.div`
  ${styles.previewLineThinColStyles}
`;

const StyledOptionsSection = styled.div`
  ${styles.previewLineWideColStyles}
`;


export {
  StyledResultLineWrapper,
  StyledImageSection,
  StyledOptionsSection,
};
