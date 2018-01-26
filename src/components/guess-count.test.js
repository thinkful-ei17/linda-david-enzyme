import React from 'react';
import GuessCount from './guess-count';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessCount />', () => {
  it('Smoke Test', () => {
    shallow(<GuessCount />)
  })

  it('Should render props correctly', () => {
    const guessCount = 5;
    const wrapper = shallow(<GuessCount guessCount={guessCount}/>);
    expect(wrapper.find("h2").text()).toEqual(`You\'ve made ${guessCount} guesses!`);
  })

  it('Should render props correctly', () => {
    const guessCount = 1;
    const wrapper = shallow(<GuessCount guessCount={guessCount}/>);
    expect(wrapper.find("h2").text()).toEqual(`You\'ve made ${guessCount} guess!`);
  })
})

//can you combine two alternate cases guesses vs. guess?

//SOLUTION
// describe('<GuessCount />', () => {
//   it('Renders without crashing', () => {
//     shallow(<GuessCount />);
//   });

//   it('Renders the correct guess count', () => {
//     const value = 5;
//     const wrapper = shallow(<GuessCount guessCount={value} />);
//     expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
//   });