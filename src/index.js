import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Sidebar from './Sidebar';
import Main from './Main';
import Overlay from './Overlay';
import ToggleSidebarContext from './ToggleSidebarContext';
import ToggleSidebarProvider from './ToggleSidebarProvider';
import './theme.css';

const ToggleSidebar = ({ theme, children }) => (
  <ToggleSidebarProvider theme={theme}>
    <Wrapper>
      {children}
      <ToggleSidebarContext.Consumer>
        {({ setClassWithTheme, isOpenSidebar, closeSidebar }) => (
          <Overlay
            setClassWithTheme={setClassWithTheme}
            isOpenSidebar={isOpenSidebar}
            closeSidebar={closeSidebar}
          />
        )}
      </ToggleSidebarContext.Consumer>
    </Wrapper>
  </ToggleSidebarProvider>
);

ToggleSidebar.propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};
ToggleSidebar.defaultProps = {
  theme: null,
};

export { ToggleSidebarContext, Sidebar, Main };

export default ToggleSidebar;
