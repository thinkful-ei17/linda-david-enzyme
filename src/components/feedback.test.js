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
    expect(wrapper.find("h2").text()).toEqual('hello Guess again!')
  })
})

//SOLUTION
// it('Renders some feedback', () => {
//   let TEST_FEEDBACK = 'You are listening to a game!';

//   let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
//   expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
// });