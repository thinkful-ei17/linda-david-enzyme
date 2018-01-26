import React from 'react';
import TopNav from './top-nav';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<TopNav />', () => {
  it('Smoke Test', () => {
    shallow(<TopNav />)
  })
})