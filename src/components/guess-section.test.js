import React from 'react';
import GuessSection from './guess-section';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessSection />', () => {
  it('Smoke Test', () => {
    shallow(<GuessSection />)
  })
})