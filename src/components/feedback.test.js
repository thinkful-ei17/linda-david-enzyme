import React from 'react';
import Feedback from './feedback';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<Feedback />', () => {
  it('Smoke Test', () => {
    shallow(<Feedback />)
  })

  it('Should render props correctly', () => {
    const count = 5;
    const feedback = 'hello';
    const wrapper = shallow(<Feedback guessCount={count} feedback={feedback} />);
    expect(wrapper.contains(<h2></h2>))
  })
})