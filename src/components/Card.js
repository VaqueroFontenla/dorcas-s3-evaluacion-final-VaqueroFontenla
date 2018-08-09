import React, { Component } from 'react';
import PropTypes from 'prop-types';
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


Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  house: PropTypes.string,
  patronus: PropTypes.string,
  dateOfBirth: PropTypes.string,
  alive: PropTypes.bool,
};

export default Card;
