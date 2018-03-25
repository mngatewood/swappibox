import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createRouterContext from 'react-router-test-context';
import PropTypes from 'prop-types';
import ButtonContainer from './ButtonContainer';

describe('ButtonContainer', () => {

  configure({ adapter: new Adapter() });
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ButtonContainer />);
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<ButtonContainer />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

});