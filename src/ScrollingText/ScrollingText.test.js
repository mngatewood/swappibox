import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createRouterContext from 'react-router-test-context';
import ScrollingText from './ScrollingText';

describe('ScrollingText', () => {

  configure({ adapter: new Adapter() });
  let wrapper;
  
  it('should match the snapshot', () => {
    const context = createRouterContext();
    wrapper = mount(<ScrollingText />, { context });
    expect(wrapper).toMatchSnapshot();
  });

});