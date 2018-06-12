import React from 'react';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

const Overlay = (props, context) => (
    // eslint-disable-next-line
    <div
      className={classNames(context.setClassWithTheme('rts-overlay'))}
      style={{
        opacity: context.isOpenSidebar ? '1' : '0',
        visibility: context.isOpenSidebar ? 'visible' : 'hidden',
      }}
      onClick={context.closeSidebar}
    />
);
Overlay.propTypes = {};
Overlay.defaultProps = {};
Overlay.contextTypes = {
  setClassWithTheme: func,
  openSidebar: func,
  closeSidebar: func,
  isOpenSidebar: bool,
};

export default Overlay;
