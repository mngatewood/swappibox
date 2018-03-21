import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should match the snapshot', () => {

  })

  it('should display a random opening text when loaded', () => {
    //mock fetch?
  })

  it('should display three category buttons', () => {

  })

  it('should display a view favorites button', () => {

  })

});
