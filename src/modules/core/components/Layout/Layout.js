import React from 'react';
import PropTypes from 'prop-types';


const Layout = ({ children }) => (
  <div className="layout">
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
};


export default Layout;
