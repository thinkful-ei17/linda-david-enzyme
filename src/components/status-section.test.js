import React from 'react';
import StatusSection from './status-section';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<StatusSection />', () => {
  it('Smoke Test', () => {
    shallow(<StatusSection guesses={{}} />)
  })
})