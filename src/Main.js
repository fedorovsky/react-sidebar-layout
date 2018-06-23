import React from 'react';
import { node } from 'prop-types';
import SidebarContext from './SidebarContext';

const Main = ({ children }) => (
  <SidebarContext.Consumer>
    {({ setClassWithTheme }) => (
      <div className={setClassWithTheme('rts-main')}>{children}</div>
    )}
  </SidebarContext.Consumer>
);

Main.propTypes = {
  children: node.isRequired,
};
Main.defaultProps = {};

export default Main;
