import React from 'react';
import { func } from 'prop-types';

const Main = (props, context) => {
  console.log('Main', props, context);
  return (
    <div className={context.setClassWithTheme('rts-main')}>
      <button onClick={context.openSidebar}>Open</button>
      <button onClick={context.closeSidebar}>Close</button>
    </div>
  );
};

Main.propTypes = {};
Main.defaultProps = {};
Main.contextTypes = {
  setClassWithTheme: func,
  openSidebar: func,
  closeSidebar: func,
};

export default Main;
