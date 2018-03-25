import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import People from './People';

describe('People', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<People />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot', () => {
    //mock people props
    //wrapper with people props
    //expect snapshot
  })

});
