import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Components/Header';

it('renders without crashing', () => {
  shallow(<Header onSearch={() => {}} onSearchByChanged={() => {}} />);
});
