# npm-boilerplate
## A simple boilerplate for the quick development of the npm package

| command                    | description                                              |
|----------------------------|----------------------------------------------------------|
| `yarn install`             | install required dependencies                            |
| `yarn run dev`             | run development build (from the directory `'./example'`) |
| `yarn run prepublish`      | prepare to publish on `npm`                              |
| `yarn run stylelint:--fix` | reorder all styles                                       |

### Configuration `package.json`:  
```
{
  "name": "component-name",
  "version": "0.0.0",
  "description": "component-description",
    "keywords": [
      "react",
      "react-component",
      ...
    ],
   "license": "MIT",
   "author": "Name Author",
   "main": "dist/index.js",
   "repository": "component-repository",
   ...
}
```  

### Publish & Update a Package
`npm adduser`  
`npm version [ major | minor | patch | premajor | preminor | prepatch | prerelease ]`  
`npm publish`

### Using

```$javascript
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
```
