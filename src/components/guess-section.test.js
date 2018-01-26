import React from 'react';
import GuessSection from './guess-section';
import Feedback from './feedback';
import GuessForm from './guess-form';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessSection />', () => {
  it('Smoke Test', () => {
    shallow(<GuessSection />)
  })

  it('Should render correct components', () => {
    const wrapper = mount(<GuessSection/>);
    // console.log(wrapper.debug());
    expect(wrapper.contains(Feedback)).toEqual(true)
    expect(wrapper.contains(GuessForm)).toEqual(true)
  })
})