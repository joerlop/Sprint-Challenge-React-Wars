import React, { Component } from 'react';
import './App.scss';

import CharacterList from "./components/CharacterList"

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: ""
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ 
          starwarsChars: data.results,
          nextURL: data.next,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = event => {
    event.preventDefault();
    this.getCharacters(this.state.nextURL)
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.nextPage}>Next!</button>
        <div className="character-container">
          <CharacterList list={this.state.starwarsChars} />
        </div>
      </div>
    );
  }
}

export default App;
