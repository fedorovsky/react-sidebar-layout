import React, { Component } from 'react';
import classNames from 'classnames';
import { bool, func } from 'prop-types';

class Overlay extends Component {
  static propTypes = {};
  static defaultProps = {};
  static contextTypes = {
    setClassWithTheme: func,
    closeSidebar: func,
    isOpenSidebar: bool,
  };

  state = {};

  move = {
    startX: 0,
    finishX: 0,
  };

  handleSwipeStart = (event) => {
    this.move.startX = event.touches[0].clientX;
  };

  handleSwipeEnd = (event) => {
    this.move.finishX = event.changedTouches[0].clientX;
    this.swipeEnd(this.move);
  };

  swipeEnd = ({ startX, finishX }) => {
    if ((startX - finishX) > 100) {
      this.context.closeSidebar();
    }
  };

  render() {
    console.log(this.state);
    return (
      // eslint-disable-next-line
      <div
        className={classNames(this.context.setClassWithTheme('rts-overlay'))}
        style={{
          opacity: this.context.isOpenSidebar ? '1' : '0',
          visibility: this.context.isOpenSidebar ? 'visible' : 'hidden',
        }}
        onClick={this.context.closeSidebar}
        onTouchStart={this.handleSwipeStart}
        onTouchEnd={this.handleSwipeEnd}
      />
    );
  }
}

export default Overlay;
