import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'react-layout-drawer',
  url: '',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  sidebarAnimations: true,
});

storybook.configure(() => require('../src/stories/index.stories'), module);
