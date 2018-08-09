import React, { Component } from 'react';
import '../stylesheets/Card.css';


class Card extends Component {
  constructor (props) {
    super (props)
  }


  render () {
  const { name,house,image,alive,dateOfBirth,patronus } = this.props.potterinoino;

  console.log(name);
    return (
      <ul className="potterCard">
        <li><img src={image} alt="character image"/></li>
        <li>{name}</li>
        <li>{house}</li>
        <li>{alive?'Vivo':'Muerto'}</li>
        <li>{patronus}</li>
        <li>{dateOfBirth}</li>

      </ul>

    )
  }
}

export default Card;
