import React from 'react';
import { render } from 'react-dom';
import ToggleSidebar, {
  Sidebar,
  Main,
  ToggleSidebarContext,
} from 'react-toggle-sidebar';
import styles from './index.css';

const THEME_TOGGLE_SIDEBAR = {
  'rts-wrapper': styles['rts-wrapper'],
  'rts-sidebar': styles['rts-sidebar'],
  'rts-main': styles['rts-main'],
};

function Root() {
  return (
    <ToggleSidebar theme={THEME_TOGGLE_SIDEBAR}>
      <Sidebar>
        <ToggleSidebarContext.Consumer>
          {({ closeSidebar }) => <button onClick={closeSidebar}>Close</button>}
        </ToggleSidebarContext.Consumer>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </Sidebar>
      <Main>
        <ToggleSidebarContext.Consumer>
          {({ openSidebar }) => <button onClick={openSidebar}>Open</button>}
        </ToggleSidebarContext.Consumer>
      </Main>
    </ToggleSidebar>
  );
}

render(<Root />, document.getElementById('container'));
