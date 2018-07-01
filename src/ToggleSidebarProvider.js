import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStateHandlers, compose } from 'recompose';
import ToggleSidebarContext from './ToggleSidebarContext';

class ToggleSidebarProvider extends PureComponent {
  static propTypes = {
    openSidebar: PropTypes.func.isRequired,
    closeSidebar: PropTypes.func.isRequired,
    isOpenSidebar: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
  };

  static defaultProps = {
    theme: null,
  };

  setClassWithTheme = innerClass => {
    const themeClass = this.props.theme ? this.props.theme[innerClass] : null;
    return classNames(innerClass, themeClass);
  };

  render() {
    return (
      <ToggleSidebarContext.Provider
        value={{
          setClassWithTheme: this.setClassWithTheme,
          isOpenSidebar: this.props.isOpenSidebar,
          openSidebar: this.props.openSidebar,
          closeSidebar: this.props.closeSidebar,
        }}
      >
        {this.props.children}
      </ToggleSidebarContext.Provider>
    );
  }
}

const withStateHandlersHOC = withStateHandlers(
  { isOpenSidebar: false },
  {
    openSidebar: () => () => ({ isOpenSidebar: true }),
    closeSidebar: () => () => ({ isOpenSidebar: false }),
  },
);

export default compose(withStateHandlersHOC)(ToggleSidebarProvider);
