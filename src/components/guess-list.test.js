import React from 'react';
import GuessList from './guess-list';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessList />', () => {
  it('Smoke Test', () => {
  shallow(<GuessList guesses={[]} />)
  })
})