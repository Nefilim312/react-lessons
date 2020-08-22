import React from 'react';
import { shallow } from 'enzyme';
import RadioButtons from '../Components/RadioButtons';

it('test click event', () => {
  const mockCallback = jest.fn();
  const radioButtons = shallow(
    <RadioButtons
      buttons={[
        { value: 'value1', title: 'value1' },
        { value: 'value2', title: 'value2' },
      ]}
      selectedValue='value1'
      onChange={mockCallback}
    />
  );

  radioButtons.childAt(1).simulate('change');
  expect(mockCallback).toBeCalled();
});
