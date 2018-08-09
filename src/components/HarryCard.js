import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/HarryCard.css';


class HarryCard extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    return (
      <Link to={'potterCharacter/'+this.props.potterId}>

      <ul className="potterCard">
        <li><img src={this.props.potterImage} alt="character image"/></li>
        <li>{this.props.potterName}</li>
        <li>{this.props.potterHouse}</li>

      </ul>
    </Link>
    )
  }
}

export default HarryCard;
