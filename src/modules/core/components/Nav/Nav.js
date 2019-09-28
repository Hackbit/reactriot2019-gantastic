import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, SidebarItem } from 'react-rainbow-components';


const Nav = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0].name);

  function itemSelected(evt, item) {
    setSelectedItem(item);
  }

  return (
    <div
      className="rainbow-background-color_white"
      style={{
        width: '88px',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Sidebar selectedItem={selectedItem.name} onSelect={itemSelected} id="sidebar">
        {items.map(item => (
          <SidebarItem
            key={item.name}
            name={item.name}
            label={item.label}
          />
        ))}
      </Sidebar>
    </div>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Nav;
