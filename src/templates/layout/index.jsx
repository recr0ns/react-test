import React from 'react';

const Layout = (props) => {
  return (
    <div>{props.children}</div>
  );
};

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
