import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import { ScrollingText } from '../ScrollingText/ScrollingText'
import Home from '../cardContainers/Home'
import People from '../cardContainers/People'
import Planets from '../cardContainers/Planets'
import Vehicles from '../cardContainers/Vehicles';
import peopleIcon from '../assets/images/people-icon.svg';
import planetsIcon from '../assets/images/planets-icon.svg';
import vehiclesIcon from '../assets/images/vehicles-icon.svg';
import favoritesIcon from '../assets/images/favorites-icon.svg';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesArray: [],
      // utility: new Utility(),
      film: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState = () => {
    this.fetchFilm(Math.floor(Math.random() * (8 - 1)) + 1);
    this.fetchPeople();
  }
  
  fetchFilm = (filmIndex) => {
    // const filmIndex = Math.floor(Math.random() * (8 - 1)) + 1;
    const fetchURL = "https://swapi.co/api/films/"
    return fetch(`${fetchURL}${filmIndex}/`)
      .then(response => response.json())
      .then(({ title, opening_crawl: text, release_date: date }) => {
        const film = { title, text, date };
        this.setState({ film })
      })
      .catch(error => ({ error }));
  }

  fetchPeople = () => {
    const fetchURL = "https://swapi.co/api/people/"
    return fetch(fetchURL)
    .then(response => response.json())
    .then(people => (
      this.fetchSpecies(people.results)
    ))
    .then(peopleNameAndSpecies => (
      this.fetchHomeWorlds(peopleNameAndSpecies)
    ))
    .then(peopleNameSpeciesAndHomeWorld => {
      this.setState({people: peopleNameSpeciesAndHomeWorld})
    })
    .catch(error => ({ error }));
  }
  
  fetchSpecies = (people) => {
    const promises = people.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(speciesDetails => ({ 
        name: person.name,
        speciesName: speciesDetails.name, 
        homeWorld: person.homeworld
      }))
      .catch(error => (error));
    });
    return Promise.all(promises);
  };
  
  fetchHomeWorlds = (peopleNameAndSpecies) => {
    const promises = peopleNameAndSpecies.map(person => {
      return fetch(person.homeWorld)
      .then(response => response.json())
      .then(homeWorldDetails => ({
        name: person.name,
        species: person.speciesName,
        homeWorld: homeWorldDetails.name,
        population: homeWorldDetails.population
      }))
      .catch(error => this.setState(error));
    });
    return Promise.all(promises);
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="title-container">
            <Link to='/'><h2>SWAPIbox</h2></Link>
          </div>
          <nav className="button-container">
            <NavLink to='/people'>
              <button>
                <img src={peopleIcon} alt="people icon" />
                <h4>People</h4>
              </button>
            </NavLink>
            <NavLink to='/planets'>
              <button>
                <img src={planetsIcon} alt="planets icon" />
                <h4>Planets</h4>
              </button>
            </NavLink>
            <NavLink to='/vehicles'>
              <button>
                <img src={vehiclesIcon} alt="vehicles icon" />
                <h4>Vehicles</h4>
              </button>
            </NavLink>
            <NavLink to='/favorites'>
              <button>
                <img src={favoritesIcon} alt="favorites icon" />
                <h4>Favorites</h4>             
              </button>
            </NavLink>
            <button className="count-favorites">{this.state.favorites.length}</button>
          </nav>
        </header>
        <main>
          <aside>
            <ScrollingText id="scrollMe" film={this.state.film} />
          </aside>
          <section className="content">
            <Route exact path='/' component={Home} />
            <Route exact path='/people' render={ () => <People 
              people={this.state.people} 
              updateState={this.updateState}
              /> } />
            <Route exact path='/planets' component={Planets} />
            <Route exact path='/vehicles' component={Vehicles} />
          </section>
        </main>
      </div>
    );
  }
}
