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
        }, this.addId);
      });
  }

  addId() {
    const potters= [...this.state.potters]
    let pottersConId = [];
    for (let i = 0; i<potters.length; i++) {
      pottersConId[i] = {
        ...potters[i],
        id : i
      }
    }
    console.log(pottersConId)
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
    const {filterPotterByName}=this;
    return (
      <div className="App">
        <h1 className="title">
        Harry Potter Characters
        </h1>
        <HarryFilter filterPotterByName={filterPotterByName}
                      name={this.state.name}/>
        <div className="HarryList">
          <HarryList pottersCharacter={this.state.potters}
                     pottersFilterCharacter={this.state.filterpotters}
                     />
        </div>
      </div>
    );
  }
}

export default App;
