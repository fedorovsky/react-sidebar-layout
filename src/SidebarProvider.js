import React, { Fragment, Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class SidebarProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
  };

  static childContextTypes = {
    setClassWithTheme: PropTypes.func,
    isOpenSidebar: PropTypes.bool,
    openSidebar: PropTypes.func,
    closeSidebar: PropTypes.func,
  };

  static defaultProps = {
    theme: null,
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
      <Fragment>{this.props.children}</Fragment>
    );
  }
}

export default SidebarProvider;
