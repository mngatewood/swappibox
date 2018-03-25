import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import People from './People';
import mockPeopleState from '../mockData/mockPeopleState'

describe('People', () => {

  configure({ adapter: new Adapter() });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<People />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot', () => {
    const wrapper = shallow(<People />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should populate people when button is clicked', () => {
    const wrapper = shallow(<People people={mockPeopleState} />);
    expect(wrapper.find('.Card')).to.have.length(10);
  })



});
