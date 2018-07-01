import React from 'react';
import { node } from 'prop-types';
import ToggleSidebarContext from './ToggleSidebarContext';

const Main = ({ children }) => (
  <ToggleSidebarContext.Consumer>
    {({ setClassWithTheme }) => (
      <div className={setClassWithTheme('rts-main')}>{children}</div>
    )}
  </ToggleSidebarContext.Consumer>
);

Main.propTypes = {
  children: node.isRequired,
};
Main.defaultProps = {};

export default Main;
