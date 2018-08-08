import React, { Component } from 'react';
import HarryList from './HarryList';
import './App.css';


const url = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      potters: []
    }

  }


  componentDidMount() {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          potters: json
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">
        Harry Potter Characters
        </h1>
        <div className="search">
          <input type="text"/>
        </div>
        <div className="HarryList">
          <HarryList pottersCharacter={this.state.potters}/>
        </div>
      </div>
    );
  }
}

export default App;
