import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  mount(<App />);
});
