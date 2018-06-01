import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import Main from './Main';
import ThemeProvider from './ThemeProvider';
import './theme.css';

const ToggleSidebar = props => (
  <ThemeProvider theme={props.theme}>
    <Wrapper>
      <Sidebar />
      <Main />
      <Overlay />
    </Wrapper>
  </ThemeProvider>
);
ToggleSidebar.contextTypes = {
  setClassWithTheme: PropTypes.func,
};
ToggleSidebar.propTypes = {
  theme: PropTypes.shape({}),
};
ToggleSidebar.defaultProps = {
  theme: null,
};

export default ToggleSidebar;
