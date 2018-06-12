import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

it('Overlay Hidden', () => {
  const context = {
    setClassWithTheme: () => {},
    openSidebar: () => {},
    closeSidebar: () => {},
    isOpenSidebar: false,
  };
  const wrapper = shallow(<Overlay />, { context });
  expect(wrapper.prop('style')).toEqual({
    opacity: '0',
    visibility: 'hidden',
  });
});

it('Overlay Visible', () => {
  const context = {
    setClassWithTheme: () => {},
    openSidebar: () => {},
    closeSidebar: () => {},
    isOpenSidebar: true,
  };
  const wrapper = shallow(<Overlay />, { context });
  expect(wrapper.prop('style')).toEqual({
    opacity: '1',
    visibility: 'visible',
  });
});

