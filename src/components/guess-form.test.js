import React from 'react';
import GuessForm from './guess-form';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<GuessForm />', () => {
  it('Smoke Test', () => {
    shallow(<GuessForm />)
  })

//   const wrapper = mount(<Foo />);
// expect(wrapper.ref('secondRef').prop('amount')).to.equal(4);
// expect(wrapper.ref('secondRef').text()).to.equal('Second');

  it('Should fire the onMakeGuess callback when the form is submitted', () => {
    const mockedEvent = { target: {} }
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback}/>);
    const guess = 1;
    // console.log(wrapper.debug());
    wrapper.find('input[type="number"]').instance().value = guess;
    wrapper.simulate('submit');
    // wrapper.find('input').ref(guess).prop('input').toEqual(guess);
    expect(callback).toHaveBeenCalledWith(guess.toString());
  })
})