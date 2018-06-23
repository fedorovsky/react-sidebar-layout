import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

it('Overlay is Hidden', () => {
  const wrapper = shallow(
    <Overlay
      setClassWithTheme={() => null}
      closeSidebar={() => null}
      isOpenSidebar={false}
    />,
  );
  expect(wrapper.prop('style')).toEqual({
    opacity: '0',
    visibility: 'hidden',
  });
});

it('Overlay is Visible', () => {
  const wrapper = shallow(
    <Overlay
      setClassWithTheme={() => null}
      closeSidebar={() => null}
      isOpenSidebar
    />,
  );
  expect(wrapper.prop('style')).toEqual({
    opacity: '1',
    visibility: 'visible',
  });
});
