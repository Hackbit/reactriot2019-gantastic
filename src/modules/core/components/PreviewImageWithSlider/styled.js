import styled from 'styled-components';

import { colors, styles } from 'modules/core/constants';


const StyledImageSliderWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 0 0 20px 0;
`;

const StyledImageSection= styled.div`
  ${styles.previewLineThinColStyles}
`;

const StyledSliderSection = styled.div`
  ${styles.previewLineWideColStyles}
`;

const StyledNumberInput = styled.input`
  background-color: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.inputBorder};
  box-shadow: none;
  color: ${colors.inputText};
  font-size: 18px;
  max-width: 60px;
  outline: none;
  padding: 0 8px;
  width: 60px;
  transition: all 0.1s linear 0s;
  
  &:focus {
    border-color: ${colors.primary};
    border-width: 2px;
  }
`;


export {
  StyledImageSliderWrapper,
  StyledImageSection,
  StyledSliderSection,
  StyledNumberInput,
};
