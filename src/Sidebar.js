import React from 'react';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

const Sidebar = (props, context) => {
  console.log('Sidebar', props, context);
  return (
    <div
      className={classNames(context.setClassWithTheme('rts-sidebar'))}
      style={{
        transform: context.isOpenSidebar ? 'translateX(0%)' : 'translateX(-100%)',
      }}
    >
      <button onClick={context.openSidebar}>Open</button>
      <button onClick={context.closeSidebar}>Close</button>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, repellat.</li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {};
Sidebar.defaultProps = {};
Sidebar.contextTypes = {
  setClassWithTheme: func,
  isOpenSidebar: bool,
  openSidebar: func,
  closeSidebar: func,
};

export default Sidebar;
