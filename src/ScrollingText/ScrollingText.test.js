import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import ScrollingText from './ScrollingText';

describe('ScrollingText', () => {

  configure({ adapter: new Adapter() });
  let context;
  let wrapper;

  beforeEach(() => {
    const context = createRouterContext()
    const wrapper = mount(<ScrollingText />, { context });
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {

  });

});