import React from 'react';
import TopNav from './top-nav';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<TopNav />', () => {
  it('Smoke Test', () => {
    shallow(<TopNav />)
  })

  it('Should fire the onRestartGame callback when the link for new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onRestartGame={callback}/>);
    // console.log(wrapper.debug());
    wrapper.find('a[className="new"]').simulate('click');
    expect(callback).toHaveBeenCalledWith();
  })

  it('Should fire the onGenerateAuralUpdate callback when the link for get status is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);
    // console.log(wrapper.debug());
    wrapper.find('a[className="visuallyhidden focusable status-link"]').simulate('click');
    expect(callback).toHaveBeenCalledWith();
  })

})