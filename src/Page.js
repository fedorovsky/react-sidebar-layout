import React from 'react';
import { LayoutConsumer } from './Context';
import { PageStyled } from './_styled';

type PropsType = {
  children: React.Node,
};

const Page = (props: PropsType) => (
  <LayoutConsumer>
    {({ isOpen }) => <PageStyled isOpen={isOpen}>{props.children}</PageStyled>}
  </LayoutConsumer>
);

export default Page;
