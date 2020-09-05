import React from 'react';
import { mount } from 'enzyme';
import { ErrorBoundary } from '../Components/ErrorBoundary';

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
