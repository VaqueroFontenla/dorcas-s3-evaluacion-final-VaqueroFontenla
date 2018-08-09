import React, { Component } from 'react';
import HarryCard from './HarryCard';
import '../stylesheets/CharacterDetail.css';


class CharacterDetail extends Component {
  constructor (props) {
    super (props)

  }

  render () {
 console.log(this.props);
    return (
      <div>Hola tía</div>
    );
  }
}

export default CharacterDetail;
