import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

it('renders without crashing', () => {
  mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
