import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Home />);   
    expect(wrapper).toMatchSnapshot();
  });

});
