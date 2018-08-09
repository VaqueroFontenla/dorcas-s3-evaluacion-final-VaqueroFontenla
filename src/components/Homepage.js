import React, { Component } from 'react';
import HarryFilter from './HarryFilter';
import HarryList from './HarryList';


class Homepage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
console.log(this.props);
const {filterPotterByName, name, pottersCharacter, pottersFilterCharacter}=this.props;
    return (

      <div className="homepage">
        <HarryFilter filterPotterByName={filterPotterByName}
                      name={name}/>
        <HarryList pottersCharacter={pottersCharacter}
                     pottersFilterCharacter={pottersFilterCharacter}
                     />
      </div>

    );
  }

}

export default Homepage;
