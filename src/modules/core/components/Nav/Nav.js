import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from './styled';


const Nav = ({ items, selectedItem }) => {
  return (
    <StyledNav>
      <StyledNavList>
        {items.map(item => (
          <StyledNavItem key={item.name}>
            <StyledNavLink
              active={selectedItem === item.name ? 'true' : undefined}
              to={item.to}
            >
              {item.label}
            </StyledNavLink>
          </StyledNavItem>
        ))}
      </StyledNavList>
    </StyledNav>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  selectedItem: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

Nav.defaultProps = {
  className: undefined,
  items: [],
  style: undefined,
};


export default Nav;
