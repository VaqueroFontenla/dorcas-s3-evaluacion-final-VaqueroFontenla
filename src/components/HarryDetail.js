import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Card from './Card';
import '../stylesheets/HarryDetail.css';



class HarryDetail extends Component {
  constructor (props) {
    super (props)
  }


  render () {
   const { match,
     potters
   } = this.props;
   console.log(this.props);

   const idPotters = parseInt(match.params.id);
   const potterino = potters.filter(potter => {
      return potter.id === idPotters;
    });

    //let potterToShow = potterino[0];
    console.log(potterino)



  return (
    <div>
    <Link to="/" className="back-btn">Volver :)</Link>
    <ul> {
      potterino.map((potterinoino,index)=>
      <li>{potterinoino.name}</li>
      )
    }

    </ul>

    </div>
  );
}
}

export default HarryDetail;
