import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import MainPage from './MainPage';
import { MemoryRouter } from 'react-router-dom';

describe('Main page', () => {
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );
  });

  it('search request', () => {
    const component = mount(
      <MemoryRouter>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </MemoryRouter>
    );
    const value = 'some text';
    const searchString = component.find('SearchString').childAt(0);

    searchString.childAt(0).simulate('change', value);
    searchString.childAt(1).simulate('click');
  });
});
