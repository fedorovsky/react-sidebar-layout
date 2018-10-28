// @flow
import * as React from 'react';
import { Overlay, Wrapper } from './_styled';
import { LayoutProvider, LayoutConsumer } from './Context';
import Drawer from './Drawer';
import Page from './Page';

type PropsType = {
  children: React.Node,
};

type StateType = {
  isOpen: boolean,
};

class Layout extends React.Component<PropsType, StateType> {
  static Consumer = LayoutConsumer;
  static Drawer = Drawer;
  static Page = Page;

  state = {
    isOpen: false,
  };

  openDrawer = () => this.setState({ isOpen: true });

  closeDrawer = () => this.setState({ isOpen: false });

  render() {
    return (
      <LayoutProvider
        value={{
          isOpen: this.state.isOpen,
          openDrawer: this.openDrawer,
          closeDrawer: this.closeDrawer,
        }}
      >
        <Wrapper>
          {this.props.children}
          <Overlay isOpen={this.state.isOpen} onClick={this.closeDrawer} />
        </Wrapper>
      </LayoutProvider>
    );
  }
}

export default Layout;
