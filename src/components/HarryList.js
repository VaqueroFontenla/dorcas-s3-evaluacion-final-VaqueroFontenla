import React, { Component } from 'react';
import HarryCard from './HarryCard';
import './HarryList.css';



class HarryList extends Component {
  constructor (props) {
    super (props)

  }

  render () {
    console.log(this.props);

    const {pottersFilterCharacter,pottersCharacter}=this.props
    let filterOrNot;

    if (pottersFilterCharacter.length === 0) {
      filterOrNot = pottersCharacter;
    } else {
      filterOrNot = pottersFilterCharacter;
    }

    return (
      <ul className="potterList">
        {
          filterOrNot.map((filterOrNot, index) =>
            <HarryCard key={index} potterName={filterOrNot.name}
                                  potterHouse={filterOrNot.house}
                                  potterImage={filterOrNot.image}
                                />
          )
        }

      </ul>

    );
  }
}

export default HarryList;
