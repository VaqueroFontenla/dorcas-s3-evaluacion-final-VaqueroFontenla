import React, { Component } from 'react';
import HarryList from './HarryList';
import HarryFilter from './HarryFilter';
import './App.css';


const url = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      potters: [],
      name: '',
      filterpotters:[],
    }

    this.filterPotterByName=this.filterPotterByName.bind(this);

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

  filterPotterByName(e) {
    console.log(e.target.value)
    const  {potters, name}=this.state;
    this.setState(
      {
        name: e.target.value,
      //potters: nameFilter
    })
    const nameFilter = potters.filter(item => item.name.includes(name));
    this.setState(
      {
      potters: nameFilter
  })
    console.log(nameFilter);
  }

  render() {
    const {filterPotterByName}=this;
    return (
      <div className="App">
        <h1 className="title">
        Harry Potter Characters
        </h1>
        <HarryFilter filterPotterByName={filterPotterByName}
                      name={this.state.name}/>
        <div className="HarryList">
          <HarryList pottersCharacter={this.state.potters}/>
        </div>
      </div>
    );
  }
}

export default App;
