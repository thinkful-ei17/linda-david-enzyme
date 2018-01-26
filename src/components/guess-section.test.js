import React from 'react';
import GuessSection from './guess-section';
import Feedback from './feedback';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessSection />', () => {
  it('Smoke Test', () => {
    shallow(<GuessSection />)
  })

  it('Should render correct props', () => {
    
    const feedback = 'hello';
    const guessCount = 5;
    const wrapper = mount(<GuessSection feedback={feedback} guessCount={guessCount} />);
    // console.log(wrapper.debug());
    // check if Feedback and Guessform components render
    expect(wrapper.contains(Feedback)).toEqual(true)
  })
})