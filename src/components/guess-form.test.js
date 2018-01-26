import React from 'react';
import GuessForm from './guess-form';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessForm />', () => {
  it('Smoke Test', () => {
    shallow(<GuessForm />)
  })

  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const mockedEvent = { target: {} }
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
    const guess = 1;
    // console.log(wrapper.debug());
    wrapper.find('input[type="number"]').instance().value = guess;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(guess.toString());
  })
})

//SOLUTION
// it('Should fire the onMakeGuess callback when the form is submitted', () => {
//   const callback = jest.fn();
//   const wrapper = mount(<GuessForm onMakeGuess={callback} />);
//   const value = 10;
//   wrapper.find('input[type="number"]').instance().value = value;
//   wrapper.simulate('submit');
//   expect(callback).toHaveBeenCalledWith(value.toString());
// });

// it('Should reset the input when the form is submitted', () => {
//   const wrapper = mount(<GuessForm />);
//   const input = wrapper.find('input[type="number"]');
//   input.instance().value = 10;
//   wrapper.simulate('submit');
//   expect(input.instance().value).toEqual('');
// });
// });