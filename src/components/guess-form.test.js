import React from 'react';
import GuessForm from './guess-form';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessForm />', () => {
  it('Smoke Test', () => {
    shallow(<GuessForm />)
  })
})