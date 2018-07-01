import React from 'react';
import { node } from 'prop-types';
import ToggleSidebarContext from './ToggleSidebarContext';

const Wrapper = props => (
  <ToggleSidebarContext.Consumer>
    {({ setClassWithTheme }) => (
      <div className={setClassWithTheme('rts-wrapper')}>{props.children}</div>
    )}
  </ToggleSidebarContext.Consumer>
);

Wrapper.propTypes = {
  children: node,
};
Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
