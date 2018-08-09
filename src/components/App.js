import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import HarryFilter from './HarryFilter';


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
        }, this.addId);

      });
  }

  addId() {
    const potters= [...this.state.potters]
    console.log(potters);
    let pottersConId = [];
    for (let i = 0; i<potters.length; i++) {
      pottersConId[i] = {
        ...potters[i],
        id : i
      }
    }
    this.setState({
      potters: pottersConId
    });
  }

  filterPotterByName(e) {
    this.setState(
      {
        name: e.target.value
      //potters: nameFilter
    }, ()=> {
      const potters= [...this.state.potters]
      const potterFilter= potters.filter(item => item.name.includes(this.state.name));
      this.setState(
        {
          filterpotters: potterFilter
        }
      )
        console.log(this.state.potters);
    })
  }

  render() {
    console.log(this.state.potters)

    const {name, potters, filterpotters}=this.state;
    return (
      <div className="App">
        <h1 className="title">
        Harry Potter Characters
        </h1>
        <Homepage filterPotterByName={this.filterPotterByName}
                  name={name}
                  pottersCharacter={potters}
                  pottersFilterCharacter={filterpotters}
                />

      </div>
    );
  }
}

export default App;
