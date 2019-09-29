import styled from 'styled-components';


const PageSection = styled.div`
  display: block;
  margin-top: 40px;

  ${props => props.css || ''}
`;


export {
  PageSection,
};
