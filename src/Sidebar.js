import React from 'react';
import classNames from 'classnames';
import { node } from 'prop-types';
import SidebarContext from './SidebarContext';

const Sidebar = ({ children, ...other }, context) => {
  console.log('Sidebar', other, context);
  return (
    <SidebarContext.Consumer>
      {
        ({
           setClassWithTheme,
           isOpenSidebar,
           openSidebar,
           closeSidebar,
         }) => (
           <div
             className={classNames(setClassWithTheme('rts-sidebar'))}
             style={{
              transform: isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
             }}
           >
             <button onClick={openSidebar}>Open</button>
             <button onClick={closeSidebar}>Close</button>
             { children }
           </div>
        )
      }
    </SidebarContext.Consumer>
  );
};

Sidebar.propTypes = {
  children: node.isRequired,
};

export default Sidebar;
