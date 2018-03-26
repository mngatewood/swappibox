import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import mockFilm from '../mockData/mockFilm';
import mockPeople from '../mockData/mockPeople';

describe('App', () => {

  configure({ adapter: new Adapter() });

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

});

describe('Scrolling Text', () => {

  // configure({ adapter: new Adapter() });
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockFilm)
      }
    ));
  });

  it('should call fetchFilm with no parameters on mount', () => {
    const mockFetchFilm = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount;
    expect(mockFetchFilm).toHaveBeenCalled();
    mockFetchFilm.mockClear();
  });

  it('should call fetch (film) with correct parameters', () => {
    const expected = 'https://swapi.co/api/films/5/';
    wrapper.instance().fetchFilm(5);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should display a random opening text once fetched', async () => {
    //validate
    await wrapper.instance().componentDidMount;
    expect(wrapper).toMatchSnapshot;
  });

});

describe('People', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(
      {
        ok: true,
        json: () => Promise.resolve(mockPeople)
      }
    ));
  });

  it('should call fetchPeople with no parameters on mount', () => {
    const mockFetchPeople = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount;
    expect(mockFetchPeople).toHaveBeenCalled();
    mockFetchPeople.mockClear();
  });

  it('should call fetch (people) with no parameters', () => {
    const expected = 'https://swapi.co/api/people/';
    wrapper.instance().fetchPeople();
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should call fetchSpecies with correct parameters', async () => {
    const mockFetchSpecies = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    await wrapper.instance().componentDidMount();
    expect(mockFetchSpecies).toHaveBeenCalled();
    mockFetchSpecies.mockClear();
  });

  it('should call fetch (people.species) with correct parameters', () => {
    const mockPerson = mockPeople[0];
    const expected = mockPerson.species;
    wrapper.instance().fetchSpecies(mockPeople);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should call fetchHomeWorlds with correct parameters', () => {
    const mockFetchSpecies = jest.spyOn(App.prototype, 'componentDidMount');
    const wrapper = shallow(<App />);
    wrapper.instance().componentDidMount;
    expect(mockFetchSpecies).toHaveBeenCalled();
    mockFetchSpecies.mockClear();
  });

  it('should call fetch (people.homeworlds) with correct params', async () => {
    const mockPerson = mockPeople[0];
    const expected = [mockPerson][0].homeworld;
    await wrapper.instance().fetchHomeWorlds([mockPerson]);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should update state when fetch is complete', async () => {
    await wrapper.instance().fetchPeople();
    expect(wrapper.state('people')).toEqual(mockPeople);
  });

});