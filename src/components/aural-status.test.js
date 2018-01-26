import React from 'react';
import AuralStatus from './aural-status';
import { shallow, mount } from 'enzyme';
import './configureTests';

describe('<AuralStatus />', () => {
  it('Smoke Test', () => {
    shallow(<AuralStatus />)
  })

  it('Should render correct props', () => {
    const auralStatus = 'hello';
    const wrapper = shallow(<AuralStatus auralStatus={auralStatus} />);
    console.log(wrapper.debug());
    expect(wrapper.contains(<p>{auralStatus}</p>)).toEqual(true);
  })
})

// it('Renders the title', () => {
//   const title = 'Foo';
//   const wrapper = shallow(<Board title={title} />);
//   expect(wrapper.contains(<h2>{title}</h2>)).toEqual(true);
// });