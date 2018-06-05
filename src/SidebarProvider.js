import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SidebarProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
  };

  static defaultProps = {
    theme: null,
  };

  static childContextTypes = {
    setClassWithTheme: PropTypes.func,
    isOpenSidebar: PropTypes.bool,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
  };

  state = {
    isOpenSidebar: false,
  };

  getChildContext() {
    return {
      setClassWithTheme: this.setClassWithTheme,
      isOpenSidebar: this.state.isOpenSidebar,
      openSidebar: this.openSidebar,
      closeSidebar: this.closeSidebar,
    };
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
      <div>{ this.props.children }</div>
    );
  }
}

export default SidebarProvider;
