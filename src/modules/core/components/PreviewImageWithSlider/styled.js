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
  background-color: ${colors.transparent};
  border-radius: 10px;
  border: 1px solid ${colors.white};
  box-shadow: none;
  color: ${colors.white};
  font-size: 16px;
  max-width: 60px;
  outline: none;
  padding: 0 8px;
  width: 60px;
`;


export {
  StyledImageSliderWrapper,
  StyledImageSection,
  StyledSliderSection,
  StyledNumberInput,
};
