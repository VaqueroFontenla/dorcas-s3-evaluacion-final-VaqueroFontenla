import React, { Component } from 'react';
import HarryCard from './HarryCard';
import PropTypes from 'prop-types';
import '../stylesheets/HarryList.css';



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
      <ul className="potterCharacters">
        {
          filterOrNot.map((filterOrNot, index) =>
            <HarryCard key={index} potterName={filterOrNot.name}
                                   potterHouse={filterOrNot.house}
                                   potterImage={filterOrNot.image}
                                   potterId={filterOrNot.id}
                                />
          )
        }

      </ul>

    );
  }
}

HarryList.propTypes = {
    pottersCharacter: PropTypes.array,
    pottersFilterCharacter: PropTypes.array,
};

export default HarryList;
