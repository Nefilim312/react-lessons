import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../Components/Logo';

it('renders without crashing', () => {
  shallow(<Logo />);
});
