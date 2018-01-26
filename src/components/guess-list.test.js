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
    console.log(wrapper.debug());
    // const texts = wrapper.find(guesses).map(guess => guess.text());
    expect(wrapper.contains(
    <ul id="guessList" className="guessBox clearfix">
      <li>
        {guesses[0]}
      </li>
      <li>
        {guesses[1]}
      </li>
      <li>
        {guesses[2]}
      </li>
    </ul>)).toEqual(true);

  })

})