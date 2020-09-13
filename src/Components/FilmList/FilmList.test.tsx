import React from 'react';
import { mount } from 'enzyme';
import FilmList from './FilmList';
import DemoData from '../../Tests/DemoData';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { MemoryRouter } from 'react-router-dom';
import toJson from 'enzyme-to-json';

describe('FilmList component', () => {
  it('should be render text "No films found"', () => {
    const component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <FilmList films={[]} />
        </Provider>
      </MemoryRouter>
    );

    expect(toJson(component.find('FilmList'))).toMatchSnapshot();
  });

  it('should be render demo data (6 elements)', () => {
    const component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <FilmList films={DemoData} />
        </Provider>
      </MemoryRouter>
    );

    expect(toJson(component.find('FilmList'))).toMatchSnapshot();
  });
});
