import styled from 'styled-components';

import { colors } from 'modules/core/constants';


const PageSection = styled.div`
  display: block;
  margin-bottom: 10px;
  margin-top: 40px;

  ${props => props.css || ''}
`;

const SectionTitle = styled.h1`
  color: ${colors.text};
  font-size: 18px;
  margin-bottom: 20px;
  padding-left: 20px;
  text-align: left;
`;


export {
  PageSection,
  SectionTitle,
};
