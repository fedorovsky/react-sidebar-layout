import React from 'react';
import { render } from 'react-dom';
import ToggleSidebar, {
  Sidebar,
  Main,
  SidebarContext,
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
        <div>Sidebar content</div>
      </Sidebar>
      <Main>
        <SidebarContext.Consumer>
          {({ openSidebar }) => (
            <div>
              <button onClick={openSidebar}>Open</button>
            </div>
          )}
        </SidebarContext.Consumer>
      </Main>
    </ToggleSidebar>
  );
}

render(<Root />, document.getElementById('container'));
