import React, { Component } from 'react';
import './HarryFilter.css';


class HarryFilter extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    const {filterPotterByName}=this.props;

    return (
      <div className="search">
        <input type="text" name="" value={this.props.name} onChange={filterPotterByName}/>
      </div>
    )
  }
}

export default HarryFilter;
