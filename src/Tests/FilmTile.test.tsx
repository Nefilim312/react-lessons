import React from 'react';
import { shallow } from 'enzyme';
import FilmTile from '../Components/FilmTile';
import DemoData from './DemoData';

it('renders without crashing', () => {
  shallow(<FilmTile filmData={DemoData[0]} onClick={() => {}} />);
});

it('test click event', () => {
  const mockCallback = jest.fn();
  const tile = shallow(
    <FilmTile filmData={DemoData[0]} onClick={mockCallback} />
  );

  tile.simulate('click');
  expect(mockCallback).toBeCalled();
});
