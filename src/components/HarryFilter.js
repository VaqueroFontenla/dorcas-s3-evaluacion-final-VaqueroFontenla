import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/HarryFilter.css';


class HarryFilter extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    const {filterPotterByName}=this.props;

    return (
      <div className="search">
        {/* <label fhtmlFor="inputPotters">Search your "Potter"</label> */}
        <input className="search-input" type="text" name="inputPotters" value={this.props.name} onChange={filterPotterByName}/>
      </div>
    )
  }
}

HarryFilter.propTypes = {
    name: PropTypes.string,
    filterPotterByName: PropTypes.func.isRequired,
};

export default HarryFilter;
