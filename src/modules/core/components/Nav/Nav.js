import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Nav = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0].name);

  function itemSelected(evt, item) {
    setSelectedItem(item);
  }

  return (
    <div
      style={{
        width: '88px',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <div>
        {items.map(item => (
          <div key={item.name}>
            {item.label}
          </div>
        ))}
      </div>
    </div>
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
