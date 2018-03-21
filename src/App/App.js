import React, { Component } from 'react';
import './App.css';
import ScrollingText from '../ScrollingText/ScrollingText'
import ButtonContainer from '../ButtonContainer/ButtonContainer'
import CardContainer from '../CardContainer/CardContainer'
import Utility from '../Utility/Utility';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utility: new Utility(),
      film: {},
      people: {},
      favorites: []
    };
  }

  componentDidMount() {
    this.getScrollingText();
  }
  
  getScrollingText = () => {
    const filmIndex = Math.floor(Math.random() * (8 - 1)) + 1;
    this.state.utility.fetchFilm(filmIndex)
      .then(result => this.setState({ film: result}))
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
            <ButtonContainer favorites={this.state.favorites} />
          </header>
          <CardContainer />
        </main>
      </div>
    );
  }
}
