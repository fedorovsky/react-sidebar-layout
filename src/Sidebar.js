import React from 'react';
import classNames from 'classnames';
import { node } from 'prop-types';
import ToggleSidebarContext from './ToggleSidebarContext';

const Sidebar = ({ children }) => (
  <ToggleSidebarContext.Consumer>
    {({ setClassWithTheme, isOpenSidebar }) => (
      <div
        className={classNames(setClassWithTheme('rts-sidebar'))}
        style={{
          transform: isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
        }}
      >
        {children}
      </div>
    )}
  </ToggleSidebarContext.Consumer>
);

Sidebar.propTypes = {
  children: node.isRequired,
};

export default Sidebar;
