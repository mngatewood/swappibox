import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

describe('Card', () => {

  configure({ adapter: new Adapter() });
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<Card />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

})