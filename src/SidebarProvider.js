import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarContext from './SidebarContext';

class SidebarProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
  };

  static defaultProps = {
    theme: null,
  };

  state = {
    isOpenSidebar: false,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isOpenSidebar !== this.state.isOpenSidebar;
  }

  setClassWithTheme = (innerClass) => {
    const themeClass = this.props.theme ? this.props.theme[innerClass] : null;
    return classNames(innerClass, themeClass);
  };

  openSidebar = () => {
    this.setState({ isOpenSidebar: true });
  };

  closeSidebar = () => {
    this.setState({ isOpenSidebar: false });
  };

  render() {
    return (
      <SidebarContext.Provider
        value={{
          setClassWithTheme: this.setClassWithTheme,
          isOpenSidebar: this.state.isOpenSidebar,
          openSidebar: this.openSidebar,
          closeSidebar: this.closeSidebar,
        }}
      >
        {this.props.children}
      </SidebarContext.Provider>
    );
  }
}

export default SidebarProvider;
