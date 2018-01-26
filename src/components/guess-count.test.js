import React from 'react';
import GuessCount from './guess-count';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessCount />', () => {
  it('Smoke Test', () => {
    shallow(<GuessCount />)
  })
})