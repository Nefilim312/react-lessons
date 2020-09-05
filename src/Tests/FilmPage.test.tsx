import React from 'react';
import { mount } from 'enzyme';
import DemoData from './DemoData';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import FilmPage from '../Pages/FilmPage';

it('renders without crashing', () => {
  const film = DemoData[0];
  mount(
    <Provider store={store}>
      <FilmPage
        film={film}
        onBackButtonClick={jest.fn()}
        openFilm={jest.fn()}
      />
    </Provider>
  );
});
