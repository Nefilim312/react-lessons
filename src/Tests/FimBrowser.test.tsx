import DemoData from '../DemoData';
import { shallow } from 'enzyme';
import FilmBrowser, { searchFilms, sortFilms } from '../Components/FilmBrowser';
import React from 'react';

describe('FilmBrowser component', () => {
  it('search films by title', () => {
    expect(searchFilms(DemoData, 'Kill', 'title').length).toBe(2);
  });

  it('search film by genre', () => {
    expect(searchFilms(DemoData, 'Drama', 'genre').length).toBe(3);
  });

  it('sort films by date', () => {
    expect(sortFilms(DemoData, 'date')[0].date).toBe('2004');
  });

  it('sort films by rating', () => {
    expect(sortFilms(DemoData, 'rating')[0].rating).toBe('8.9');
  });

  it('renders without crashing', () => {
    shallow(
      <FilmBrowser
        onItemClick={() => {}}
        filter={{ searchBy: 'title', sortBy: 'date', searchValue: '' }}
      />
    );
  });
});
