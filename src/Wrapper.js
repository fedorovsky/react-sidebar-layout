import React from 'react';
import { node } from 'prop-types';
import SidebarContext from './SidebarContext';

const Wrapper = props => (
  <SidebarContext.Consumer>
    {({ setClassWithTheme }) => (
      <div className={setClassWithTheme('rts-wrapper')}>{props.children}</div>
    )}
  </SidebarContext.Consumer>
);

Wrapper.propTypes = {
  children: node,
};
Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
