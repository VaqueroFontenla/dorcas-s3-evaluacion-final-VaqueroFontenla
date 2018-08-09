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
      <div className="HarryDetail">
        <Link to="/" className="back-btn">Back to home</Link>
        <ul> {
          potterino.map((potterinoino,index)=>
          <Card key={index} potterinoino={potterinoino}/>
        )
      }
    </ul>
  </div>
);
}
}

export default HarryDetail;
