import React from 'react';
import Header from './header';
import TopNav from './top-nav';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<Header />', () => {
  it('Smoke Test', () => {
    shallow(<Header />)
  })

  it('check if child components render', () => {
    const wrapper = mount(<Header/>);
    // console.log(wrapper.debug());
    expect(wrapper.contains(TopNav)).toEqual(true)
  })
})

//SOLUTION
//Only need smoke test