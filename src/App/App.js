import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import './App.css';
import { ScrollingText } from '../ScrollingText/ScrollingText'
import Home from '../card-containers/Home'
import People from '../card-containers/People'
import Planets from '../card-containers/Planets'
import Vehicles from '../card-containers/Vehicles'

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
    this.fetchFilm();
    this.fetchPeople();
  }
  
  fetchFilm = () => {
    const filmIndex = Math.floor(Math.random() * (8 - 1)) + 1;
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
        <aside>
          <ScrollingText id="scrollMe" film={this.state.film} />
        </aside>
        <main>
            <header className="title-container">
              <Link to='/'><h2>SWAPIbox</h2></Link>
              <button className="view-favorites">View Favorites
                <span className="count-favorites">{this.state.favorites.length}</span>
              </button>       
            </header>
            <section className="button-container">
              <NavLink to='/people'><button className='nav'>People</button></NavLink>
              <NavLink to='/planets'><button className='nav'>Planets</button></NavLink>
              <NavLink to='/vehicles'><button className='nav'>Vehicles</button></NavLink>
            </section>
            <section>
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
