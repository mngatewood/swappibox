import React, { Component } from 'react';
import './App.css';
import { ScrollingText } from '../ScrollingText/ScrollingText'
import { ButtonContainer } from '../ButtonContainer/ButtonContainer'
import { CardContainer } from '../CardContainer/CardContainer'
import Utility from '../Utility/Utility';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utility: new Utility(),
      film: {},
      people: [],
      favorites: [],
      activeButton: ''

    };
  }

  componentDidMount() {
    this.fetchFilm();
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
    return fetch(`${fetchURL}`)
      .then(response => response.json())
      .then(people => {
        this.setState({ people: people.results })})
      .catch(error => ({ error }));
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ScrollingText film={this.state.film} />
        </aside>
        <main>
          <header>
            <h2>SWAPIbox</h2>
            <button className="view-favorites">View Favorites
              <span className="count-favorites">{this.state.favorites.length}</span>
            </button>
            <ButtonContainer 
              favorites={this.state.favorites}
              fetchPeople={this.fetchPeople}
              />
          </header>
          <CardContainer 
            people={this.state.people}
          />
        </main>
      </div>
    );
  }
}
