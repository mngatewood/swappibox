import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

describe('App', () => {

  configure({ adapter: new Adapter() });
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // it('should render without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchFilm with no parameters on mount', () => {
    //componentDidMount
    //expect fetchFilm toHaveBeenCalled
  })

  it('should call fetch (film) with correct parameters', () => {
    //instance fetchFilm
    //expect fetch toHaveBeenCalledWith
  })

  it('should display a random opening text once fetched', () => {
    //snapshot after scrolling text is fetched
  })

  it('should call fetchPeople with no parameters on mount', () => {
    //componentDidMount
    //expect fetchPeople toHaveBeenCalledWith
  })

  it('should call fetch (people) with no parameters', () => {
    //instance fetchPeople
    //expect mock fetch toHaveBeenCalledWith
  })

  it('should call fetchSpecies with correct parameters', () => {
    //instance fetchPeople
    //expect fetchSpecies toHaveBeenCalledWith
  })

  it('should call fetch (people.species) with correct parameters', () => {
    //instance fetchSpecies
    //expect mock fetch toHaveBeenCalledWith
  })

  it('should call fetchHomeWorlds with correct parameters', () => {
    //instance fetchSpecies
    //expect fetchHomeWorlds toHaveBeenCalledWith
  })

  it('should call fetch (people.homeworlds) with correct parameters', () => {
    //instance fetchHomeWorlds
    //expect fetch toHaveBeenCalledWith
  })

  it('should update state when fetch is complete', () => {
    //instance fetchHomeWorlds

  })

  it('should display three category buttons', () => {
    //snapshot
  })

  it('should display a view favorites button', () => {
    //snapshot
  })

  it('should default to home page', () => {
    //snapshot
  })

  it('should populate people when button is clicked', () => {
    //
  })

});
