import React from 'react';
import { render } from 'react-dom';
import ToggleSidebar, { Sidebar, Main } from 'react-toggle-sidebar';
import styles from './index.css';

const THEME_TOGGLE_SIDEBAR = {
  'rts-wrapper': styles['rts-wrapper'],
};

function Root() {
  return (
    <ToggleSidebar theme={THEME_TOGGLE_SIDEBAR}>
      <Sidebar>
        <div>Sidebar content</div>
      </Sidebar>
      <Main>
        <div>Main content</div>
      </Main>
    </ToggleSidebar>
  );
}

render(<Root />, document.getElementById('container'));
