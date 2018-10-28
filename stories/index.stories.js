import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import readme from './readme.stories.md';
import Layout from '../src/index';

storiesOf('My Component', module)
  .addDecorator(withDocs(readme))
  .add('Common', () => (
    <div
      style={{
        height: '500px',
      }}
    >
      <Layout>
        <Layout.Drawer>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
          <h1>Drawer</h1>
        </Layout.Drawer>
        <Layout.Page>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <h1>Page</h1>
          <Layout.Consumer>
            {({ openDrawer, closeDrawer }) => (
              <div>
                <button onClick={openDrawer}>Open</button>
                <button onClick={closeDrawer}>Close</button>
              </div>
            )}
          </Layout.Consumer>
        </Layout.Page>
      </Layout>
    </div>
  ));
