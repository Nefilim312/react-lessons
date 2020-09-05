import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Components/Button';

it('test click event', () => {
  const mockCallback = jest.fn();
  const button = shallow(<Button onClick={mockCallback}>Ok</Button>);

  button.find('button').simulate('click');
  expect(mockCallback).toBeCalled();
});
