import React from 'react';
import Header from './header';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<Header />', () => {
  it('Smoke Test', () => {
    shallow(<Header />)
  })
})