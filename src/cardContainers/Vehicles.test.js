import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vehicles />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Vehicles />);
    expect(wrapper).toMatchSnapshot();
  });

});
