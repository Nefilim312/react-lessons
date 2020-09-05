import React from 'react';
import { mount } from 'enzyme';
import FilmList from '../Components/FilmList';
import DemoData from './DemoData';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

describe('FilmList component', () => {
  it('should be render text "No films found"', () => {
    const component = mount(
      <Provider store={store}>
        <FilmList films={[]} onItemClick={() => {}} />
      </Provider>
    );

    expect(component.find('div')).toMatchSnapshot();
  });

  it('should be render demo data (6 elements)', () => {
    const component = mount(
      <Provider store={store}>
        <FilmList films={DemoData} onItemClick={() => {}} />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  it('test click event', () => {
    const mockCallback = jest.fn();
    const filmList = mount(
      <Provider store={store}>
        <FilmList films={DemoData} onItemClick={mockCallback} />
      </Provider>
    );

    filmList.find(FilmList).childAt(0).childAt(0).simulate('click');
    expect(mockCallback).toBeCalled();
  });
});
