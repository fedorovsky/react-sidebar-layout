import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import Page from './components/Page';
import readme from '../../README.md';
import Layout from '../Layout';

storiesOf('Layout', module)
  .addDecorator(withDocs(readme))
  .add('Common', () => (
    <Page>
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
    </Page>
  ));
