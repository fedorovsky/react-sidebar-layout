import React from 'react';
import { render } from 'react-dom';
import ToggleSidebar from 'react-toggle-sidebar';
import styles from './index.css';

const THEME_TOGGLE_SIDEBAR = {
  'rts-wrapper': styles['rts-wrapper'],
};

function Root() {
  return (
    <div className={styles.wrapper}>
      <ToggleSidebar theme={THEME_TOGGLE_SIDEBAR} />
    </div>
  );
}

render(<Root />, document.getElementById('container'));
