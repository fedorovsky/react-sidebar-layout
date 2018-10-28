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
### Instructions for using the theme
* With CSS modules:  
```
import theme from './index.css';

<MyComponent theme={theme} />;
```

* Without CSS modules:  
```
import './index.css';

const theme = {
  'name-component-wrapper': 'name-component-wrapper',
  'name-component-text': 'name-component-text',
};

<MyComponent theme={theme} />;
```
### Publish & Update a Package
`npm adduser`  
`npm version [ major | minor | patch | premajor | preminor | prepatch | prerelease ]`  
`npm publish`
