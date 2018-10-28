import React from 'react';
import { LayoutConsumer } from './Context';
import { DrawerStyled } from './_styled';

type PropsType = {
  children: React.Node,
};

const Drawer = (props: PropsType) => (
  <LayoutConsumer>
    {({ isOpen }) => (
      <DrawerStyled isOpen={isOpen}>{props.children}</DrawerStyled>
    )}
  </LayoutConsumer>
);

export default Drawer;
