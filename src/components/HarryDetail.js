import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import '../stylesheets/HarryDetail.css';



class HarryDetail extends Component {
  constructor (props) {
    super (props)
  }


  render () {

   console.log(this.props);
   const potters = this.props.potters;
    if (potters.length >= 1) {
      const potters = this.props.potters;
      const idPotters = this.props.match.params.id;
      const potterinho = potters.filter(potter => {
         return potter.id === idPotters;
       }
     );
       const potterToShow = potterinho[0];
       console.log(potterinho);
    }


  return (
    <div>
    <Link to="/" className="back-btn">Volver :)</Link>
    <Card potterToShow={this.props.potterToShow}/>;
    </div>
  );
}
}

export default HarryDetail;
