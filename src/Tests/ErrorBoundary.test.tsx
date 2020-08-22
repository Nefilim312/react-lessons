import React from 'react';
import { shallow, mount } from 'enzyme';
import { ErrorBoundary } from '../Components/ErrorBoundary';

declare global {
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
    }
  }
}

import { JSDOM } from 'jsdom';
const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = global.document.defaultView as Window & typeof globalThis;

it('Renders Oops if error ', () => {
  const Something = () => null;
  const wrapper = mount(
    <ErrorBoundary>
      <Something />
    </ErrorBoundary>
  );
  wrapper.find('Something').simulateError(new Error('test'));
  expect(wrapper.html()).toContain('Oops. Something went wrong.');
});
