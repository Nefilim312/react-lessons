import React from 'react';
import { shallow } from 'enzyme';
import StateRow from './StateRow';

it('renders without crashing', () => {
  shallow(
    <StateRow>
      <div>DIV</div>
    </StateRow>
  );
});
