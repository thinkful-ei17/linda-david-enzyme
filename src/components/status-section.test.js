import React from 'react';
import StatusSection from './status-section';
import GuessCount from './guess-count';
//import GuessList from './guess-list';
import AuralStatus from './aural-status';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<StatusSection />', () => {
  it('Smoke Test', () => {
    shallow(<StatusSection guesses={{}} />)
  })

  it('Should render correct components', () => {
    const guesses = 2;
    const wrapper = mount(<StatusSection guesses={{}}/>);
    console.log(wrapper.debug());
    expect(wrapper.contains(GuessCount)).toEqual(true)
    //expect(wrapper.contains(GuessList guesses={[]}).toEqual(true)
    expect(wrapper.contains(AuralStatus)).toEqual(true)
  })
})