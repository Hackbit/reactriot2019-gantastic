import styled from 'styled-components';

import { colors } from 'modules/core/constants';


const StyledImageSliderWrapper = styled.div`
  display: flex;
  padding: 0 20px;
  margin: 0 0 20px 0;
`;

const StyledImageSection= styled.div`
  flex-basis: 120px;
  width: 120px;
`;

const StyledSliderSection = styled.div`
  align-self: center;
  display: flex;
  flex-basis: calc(100% - 120px);
  justify-content: space-between;
  max-height: 44px;
  padding: 0 0 0 20px;
  width: calc(100% - 120px);
`;

const StyledNumberInput = styled.input`
  background-color: ${colors.transparent};
  border: 1px solid ${colors.white};
  border-radius: 10px;
  box-shadow: none;
  color: ${colors.white};
  max-width: 80px;
  padding: 0 8px;
  outline: none;
`;


export {
  StyledImageSliderWrapper,
  StyledImageSection,
  StyledSliderSection,
  StyledNumberInput,
};
