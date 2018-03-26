import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

describe('Card', () => {

  configure({ adapter: new Adapter() });

  it('should match the snapshot', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

});