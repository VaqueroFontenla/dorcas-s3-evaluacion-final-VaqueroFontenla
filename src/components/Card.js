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
      <ul className="potterDetailCard">
        <li className="potterDetailCard-img" style={{backgroundImage: "url(" + image + ")"}}><img className="img" src={image} alt="character image"/></li>
        <li className="potterDetailCard-data">
          <div className="potterDetailCard-name">{name}</div>
          <div className="potterDetailCard-data-data">
          <div>Casa:  {house}</div>
          <div>Nacimiento:  {dateOfBirth}</div>
          <div>Patronus:  {patronus}</div>
          <div>Estado:  {alive?'ViVO':'MUERTO'}</div>
          </div>
        </li>
      </ul>

    )
  }
}

export default Card;
