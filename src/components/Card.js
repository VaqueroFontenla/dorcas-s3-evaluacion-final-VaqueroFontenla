import React, { Component } from 'react';
import '../stylesheets/Card.css';


class Card extends Component {
  constructor (props) {
    super (props)

  }

  render () {
  console.log(this.props)
    return (

      <ul className="potterCard">
        <li>Estoy hasta la cona</li>

      </ul>

    )
  }
}

export default Card;
