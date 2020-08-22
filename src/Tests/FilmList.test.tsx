import React from 'react';
import { shallow } from 'enzyme';
import FilmList from '../Components/FilmList';
import DemoData from '../DemoData';

describe('FilmList component', () => {
  it('should be render text "No films found"', () => {
    const component = shallow(<FilmList filmSet={[]} onItemClick={() => {}} />);
    expect(component).toMatchSnapshot();
  });

  it('should be render demo data (6 elements)', () => {
    const component = shallow(
      <FilmList filmSet={DemoData} onItemClick={() => {}} />
    );
    expect(component).toMatchSnapshot();
  });

  it('test click event', () => {
    const mockCallback = jest.fn();
    const filmList = shallow(
      <FilmList filmSet={DemoData} onItemClick={mockCallback} />
    );

    filmList.childAt(0).simulate('click');
    expect(mockCallback).toBeCalled();
  });
});
