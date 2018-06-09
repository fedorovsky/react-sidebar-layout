import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

it('Content Main', () => {
  const context = {
    setClassWithTheme: () => {},
  };

  const wrapper = shallow((<Main>__CONTENT__</Main>), { context });

  expect(wrapper.html()).toMatch('__CONTENT__');
});

