import React from 'react';
import { shallow } from 'enzyme';
import SearchString from './SearchString';

it('test search event', () => {
  const searchMock = jest.fn();
  const searchString = shallow(<SearchString onSearch={searchMock} />);
  const value = 'some text';

  searchString.childAt(0).simulate('change', value);
  searchString.childAt(1).simulate('click');
  expect(searchMock).toBeCalledWith(value);
});

it('run search by Enter pressed', () => {
  const searchMock = jest.fn();
  const searchString = shallow(<SearchString onSearch={searchMock} />);
  const value = 'some text';
  const event = {
    preventDefault() {},
    key: 'Enter',
  };

  searchString.childAt(0).simulate('change', value);
  searchString.childAt(0).simulate('keyPress', event);
  expect(searchMock).toBeCalledWith(value);
});
