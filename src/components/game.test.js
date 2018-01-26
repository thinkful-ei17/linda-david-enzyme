import React from 'react';
import Game from './game';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<Game />', () => {
  it('Smoke Test', () => {
    shallow(<Game />)
  })

  it('Should render states correctly', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('auralStatus')).toEqual('');
    // expect(wrapper.state('correctAnswer')).toEqual(number);
  })
})