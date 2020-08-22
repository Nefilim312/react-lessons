import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Components/Input';

it('test change event and value has changed', () => {
  const changeMock = jest.fn();
  const input = shallow(<Input onChange={changeMock} />);
  const value = 'some text';
  const event = {
    preventDefault() {},
    target: { value },
  };

  input.simulate('change', event);

  expect(changeMock).toBeCalledWith(value);
});
