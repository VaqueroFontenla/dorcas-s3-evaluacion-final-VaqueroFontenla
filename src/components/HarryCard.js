import React, { Component } from 'react';
import './HarryCard.css';


class HarryCard extends Component {
  constructor (props) {
    super (props)

  }

  render () {
    return (
      
      <ul className="potterCard">
        <li><img src={this.props.potterImage} alt="character image"/></li>
        <li>{this.props.potterName}</li>
        <li>{this.props.potterHouse}</li>

      </ul>
    )
  }
}

export default HarryCard;
