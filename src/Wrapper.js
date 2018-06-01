import React from 'react';
import { func, node } from 'prop-types';

const Wrapper = (props, context) => {
  console.log('Wrapper', context.setClassWithTheme('rts-wrapper'));
  return (
    <div className={context.setClassWithTheme('rts-wrapper')}>
      { props.children }
    </div>
  );
};

Wrapper.propTypes = {
  children: node,
};
Wrapper.defaultProps = {
  children: null,
};
Wrapper.contextTypes = {
  setClassWithTheme: func,
};

export default Wrapper;
