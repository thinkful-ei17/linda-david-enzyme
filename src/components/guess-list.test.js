import React from 'react';
import GuessList from './guess-list';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessList />', () => {
  it('Smoke Test', () => {
  shallow(<GuessList guesses={[]} />)
  })

  it('Should render props correctly', () => {
    const guesses = [1, 4, 5];
    const wrapper = shallow(<GuessList guesses={guesses} />);
    const texts = wrapper.find(guesses).map(guess => guess.text());
    expect(texts).toEqual(['1', '4', '5']);
  })

})