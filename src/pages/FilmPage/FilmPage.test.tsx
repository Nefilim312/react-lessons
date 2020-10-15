import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import FilmPage from './FilmPage';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  mount(
    <MemoryRouter initialEntries={['film/351286']}>
      <Provider store={store}>
        <FilmPage />
      </Provider>
    </MemoryRouter>
  );
});
