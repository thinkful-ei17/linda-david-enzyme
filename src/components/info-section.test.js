import React from 'react';
import InfoSection from './info-section';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<InfoSection />', () => {
  it('Smoke Test', () => {
    shallow(<InfoSection />)
  })
})