# Layout [see an example](https://fedorovsky.github.io/react-layout-drawer/example/?selectedKind=My%20Component&selectedStory=Common&full=0&addons=0&stories=1&panelRight=0&addonPanel=REACT_STORYBOOK%2Freadme%2Fpanel)

### Usage
```jsx
import Layout from 'react-layout-drawer';

<Layout>
    <Layout.Drawer>
        ...
    </Layout.Drawer>
    <Layout.Page>
        ...
    </Layout.Page>
</Layout>

```

### Example View
<!-- STORY -->  

### Component features
If you need to open the box, you can use the context api. Context for the box is available inside <Layout> on any 
nesting.
```jsx
import Layout from 'react-layout-drawer';

<Layout.Consumer>
    {({ openDrawer, closeDrawer }) => (
        <div>
            <button onClick={openDrawer}>Open</button>
            <button onClick={closeDrawer}>Close</button>
        </div>
    )}
</Layout.Consumer>

```

### Properties
