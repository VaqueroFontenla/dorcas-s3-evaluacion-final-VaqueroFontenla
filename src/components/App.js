import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/App.css';
import Homepage from './Homepage';
import HarryFilter from './HarryFilter';
import HarryDetail from './HarryDetail';


const url = 'http://hp-api.herokuapp.com/api/characters';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      potters: [],
      pottersWithoutId: [],
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
        pottersWithoutId: json
      }, this.addId);

    });
  }

  addId() {
    const pottersWithoutId= [...this.state.pottersWithoutId]
    let potters = [];
    for (let i = 0; i<pottersWithoutId.length; i++) {
      potters[i] = {
        ...pottersWithoutId[i],
        id : i
      }
    }
    this.setState({
      potters: potters
    });
  }

  filterPotterByName(e) {
    this.setState(
      {
        name: e.target.value
        //potters: nameFilter
      }, ()=> {
        const potters= [...this.state.potters]
        const potterFilter= potters.filter(item => { return item.name.toLowerCase().includes(this.state.name.toLowerCase())});
        this.setState(
          {
            filterpotters: potterFilter
          }
        )
      })
    }


    render() {
      const {name, potters, filterpotters}=this.state;
      return (
        <div className="App">
          <h1 className="title">
            Harry Potter Characters
          </h1>
          <main>
          <Switch>
            <Route exact path='/' render={
              () => <Homepage filterPotterByName={this.filterPotterByName}
                name={name}
                pottersCharacter={potters}
                pottersFilterCharacter={filterpotters}
              />
            }
          />
          <Route path='/potterCharacter/:id' render={
            (props) => <HarryDetail
              match={props.match}
              potters={this.state.potters}
            />
          }
        />
      </Switch>
      </main>
    </div>
  );
}
}

export default App;
