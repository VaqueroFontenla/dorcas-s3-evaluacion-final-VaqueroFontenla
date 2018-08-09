import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Fonts.css';
import '../stylesheets/HarryCard.css';


class HarryCard extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    return (
      <Link to={'potterCharacter/'+this.props.potterId}>
      <ul className="potterCard">
        <li className="potterCard-img" style={{backgroundImage: "url(" + this.props.potterImage + ")"}}><img className="img" src={this.props.potterImage} alt="character image"/></li>
        <li className="potterCard-name">{this.props.potterName}</li>
        <li className="potterCard-house">{this.props.potterHouse}</li>
      </ul>
    </Link>
    )
  }
}

export default HarryCard;
