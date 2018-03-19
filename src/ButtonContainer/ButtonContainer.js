import React, { Component } from 'react';
import './styles/App.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  myFunction = (parameter) => {

  };

  componentDidMount() {
    //fetch API here
  }

  render() {
    return (
      <div className="App">
        <aside>
          <ScrollingText />
        </aside>
        <main>
        <ButtonContainer />
        <CardContainer />
        </main>
      </div>
    );
  }
}

export default App;

