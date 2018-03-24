import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Button', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot', () => {

  })

  it('should add active class when clicked', () => {

  })

  it('should call fetchPeople when people button is clicked', () => {

  })

  it('should call fetchPlanets when planets button is clicked', () => {

  })

  it('should call fetchVehicles when vehicles button is clicked', () => {

  })


