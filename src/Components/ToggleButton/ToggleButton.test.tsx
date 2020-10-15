import React from 'react';
import { shallow } from 'enzyme';
import ToggleButton from './ToggleButton';

it('test click event', () => {
  const mockCallback = jest.fn();
  const button = shallow(
    <ToggleButton
      onChange={mockCallback}
      type='checkbox'
      caption='caption'
      value='value'
    />
  );

  button.find('input').simulate('change');
  expect(mockCallback).toBeCalled();
});

it('test value changed', () => {
  const value = false;
  const button = shallow(
    <ToggleButton type='radio' caption='caption' value='value' />
  );

  button.find('input').simulate('click');
  expect(button.prop('value')).not.toBe(value);
});
