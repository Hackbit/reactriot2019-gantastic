import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from './styled';


const Nav = ({ items }) => {
  const { pathname } = window.location;

  const [selectedItem, setSelectedItem] = useState(items[0].name);

  function itemSelected(evt, item) {
    setSelectedItem(item);
  }

  return (
    <StyledNav>
      <StyledNavList>
        {items.map(item => (
          <StyledNavItem key={item.name}>
            <StyledNavLink
              isActive={pathname.includes(item.to)}
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
  style: PropTypes.shape(),
};

Nav.defaultProps = {
  className: undefined,
  items: [],
  style: undefined,
};


export default Nav;
