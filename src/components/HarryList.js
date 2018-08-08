import React, { Component } from 'react';
import HarryCard from './HarryCard';
import './HarryList.css';



class HarryList extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    const {pottersCharacter}= this.props;
    return (
      <ul className="potterList">
        {
          pottersCharacter.map((potterCharacter, index) =>
            <HarryCard key={index} potterName={potterCharacter.name}
                                  potterHouse={potterCharacter.house}
                                  potterImage={potterCharacter.image}

                                />
          )
        }

      </ul>

    );
  }
}

export default HarryList;
