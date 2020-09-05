import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import MainPage from '../Pages/MainPage';

it('renders without crashing', () => {
  mount(
    <Provider store={store}>
      <MainPage openFilm={jest.fn()} />
    </Provider>
  );
});
