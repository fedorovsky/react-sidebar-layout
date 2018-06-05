import React from 'react';
import classNames from 'classnames';
import { bool, func, node } from 'prop-types';

const Sidebar = ({ children, ...other }, context) => {
  console.log('Sidebar', other, context);
  return (
    <div
      className={classNames(context.setClassWithTheme('rts-sidebar'))}
      style={{
        transform: context.isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
      }}
    >
      <button onClick={context.openSidebar}>Open</button>
      <button onClick={context.closeSidebar}>Close</button>
      { children }
    </div>
  );
};

Sidebar.propTypes = {
  children: node.isRequired,
};
Sidebar.defaultProps = {};
Sidebar.contextTypes = {
  setClassWithTheme: func,
  isOpenSidebar: bool,
  openSidebar: func,
  closeSidebar: func,
};

export default Sidebar;
