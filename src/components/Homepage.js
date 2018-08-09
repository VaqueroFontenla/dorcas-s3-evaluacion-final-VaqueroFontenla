import React from 'react';
import HarryFilter from './HarryFilter';
import HarryCard from './HarryFilter';


class Homepage extends Component {

  render () {

    return (

      <div className="homepage">
        <HarryFilter filterPotterByName={this.props.filterPotterByName}
                      name={this.props.name}/>
        <div className="HarryList">
          <HarryList pottersCharacter={this.props.potters}
                     pottersFilterCharacter={this.props.filterpotters}
                     />
        </div>
        
      </div>

    );
  }

}

export default Homepage;
