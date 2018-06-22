import React from 'react';
import classNames from 'classnames';
import { bool, func } from 'prop-types';


const Overlay = props => (
  // eslint-disable-next-line
  <div
    className={classNames(props.setClassWithTheme('rts-overlay'))}
    style={{
      opacity: props.isOpenSidebar ? '1' : '0',
      visibility: props.isOpenSidebar ? 'visible' : 'hidden',
    }}
    onClick={props.closeSidebar}
  />
);

Overlay.propTypes = {
  setClassWithTheme: func.isRequired,
  closeSidebar: func.isRequired,
  isOpenSidebar: bool.isRequired,
};
Overlay.defaultProps = {};

export default Overlay;
