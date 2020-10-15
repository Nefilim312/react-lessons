import React from 'react';
import { shallow } from 'enzyme';
import FilmTile from './FilmTile';
import DemoData from '../../Tests/DemoData';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  shallow(
    <MemoryRouter>
      <FilmTile filmData={DemoData[0]} />
    </MemoryRouter>
  );
});
