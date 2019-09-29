import styled from 'styled-components';

import { styles } from 'modules/core/constants';


const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledFileInputLabel = styled.label`
  ${styles.buttonStyles}
  ${styles.ghostButtonStyles}
  margin-bottom: 20px;
`;

export {
  StyledFileInput,
  StyledFileInputLabel,
};
