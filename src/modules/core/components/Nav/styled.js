import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'modules/core/constants';


const StyledNav = styled.div`
  background-color: ${colors.white};
  height: 108px;
  padding-bottom: 20px;
  position: absolute;
  top: calc(100vh - 88px);
  width: 100vw;
`;

const StyledNavList = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0 20px 20px;
`;

const StyledNavItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  position: relative;
  width: calc(100% / 3);
`;

const activeLinkStyles = css`
  background-color: ${colors.primary};
  border-radius: 100px;
  content: "";
  height: 6px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledNavLink = styled(Link)`
  align-items: center;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:before {
    ${props => props.isactive ? activeLinkStyles : ''}
  }
`;


export {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
};
