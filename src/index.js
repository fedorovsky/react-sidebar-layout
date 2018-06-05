import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Sidebar from './Sidebar';
import Main from './Main';
import Overlay from './Overlay';
import SidebarProvider from './SidebarProvider';
import './theme.css';

const ToggleSidebar = ({ theme, children }) => (
  <SidebarProvider theme={theme}>
    <Wrapper>
      { children }
      <Overlay />
    </Wrapper>
  </SidebarProvider>
);


ToggleSidebar.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};
ToggleSidebar.defaultProps = {
  theme: null,
};
ToggleSidebar.contextTypes = {
  setClassWithTheme: PropTypes.func,
};

export {
  Sidebar,
  Main,
};

export default ToggleSidebar;
