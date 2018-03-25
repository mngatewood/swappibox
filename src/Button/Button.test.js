import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Button from './Button';

describe('Button', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should add active class when clicked', () => {

  });

  it('should call fetchPeople when people button is clicked', () => {

  });

  it('should call fetchPlanets when planets button is clicked', () => {

  });

  it('should call fetchVehicles when vehicles button is clicked', () => {

  });

});