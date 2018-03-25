import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Vehicles from './Vehicles';

describe('Vehicles', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Vehicles />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot', () => {
    //mock people props
    //wrapper with people props
    //expect snapshot
  })

});
