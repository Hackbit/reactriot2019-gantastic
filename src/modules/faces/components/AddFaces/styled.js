import styled from 'styled-components';


const PageSection = styled.div`
  display: block;
  margin-top: 20px;
  ${props => props.css || ''}
`;


export {
  PageSection,
};
