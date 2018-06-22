import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Sidebar from './Sidebar';
import Main from './Main';
import Overlay from './Overlay';
import SidebarContext from './SidebarContext';
import SidebarProvider from './SidebarProvider';
import './theme.css';

const ToggleSidebar = ({ theme, children }) => (
  <SidebarProvider theme={theme}>
    <Wrapper>
      { children }
      <SidebarContext.Consumer>
        {
          ({ setClassWithTheme, isOpenSidebar, closeSidebar }) =>
            (
              <Overlay
                setClassWithTheme={setClassWithTheme}
                isOpenSidebar={isOpenSidebar}
                closeSidebar={closeSidebar}
              />
            )
        }
      </SidebarContext.Consumer>
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

export {
  SidebarContext,
  Sidebar,
  Main,
};

export default ToggleSidebar;
