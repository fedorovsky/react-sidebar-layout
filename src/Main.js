import React from 'react';
import { func, node } from 'prop-types';

const Main = ({ children, ...other }, context) => {
  console.log('Main', other, context);
  return (
    <div className={context.setClassWithTheme('rts-main')}>
      <button onClick={context.openSidebar}>Open</button>
      <button onClick={context.closeSidebar}>Close</button>
      { children }
    </div>
  );
};

Main.propTypes = {
  children: node.isRequired,
};
Main.defaultProps = {};
Main.contextTypes = {
  setClassWithTheme: func,
  openSidebar: func,
  closeSidebar: func,
};

export default Main;
