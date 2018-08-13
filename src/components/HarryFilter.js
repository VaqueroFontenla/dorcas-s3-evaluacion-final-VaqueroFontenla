import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/HarryFilter.css';


class HarryFilter extends Component {
  constructor (props) {
    super (props)

  }

  render () {

    const {filterPotterByName, filterByLive}=this.props;

    return (
      <div className="search">
        {/* <label fhtmlFor="inputPotters">Search your "Potter"</label> */}
        <input className="search-input" type="text" name="inputPotters" value={this.props.name} onChange={filterPotterByName}/>
        <label>Vivo</label>
        <input type="radio" value="Vivo" name="check" onClick={filterByLive}/>
        <label>Muerto</label>
        <input type="radio" value="Muerto" name="check" onClick={filterByLive}/>
        <label>Todos</label>
        <input type="radio" value="Todos"  name="check" onClick={filterByLive}/>
      </div>
    )
  }
}

HarryFilter.propTypes = {
    name: PropTypes.string,
    filterPotterByName: PropTypes.func.isRequired,
};

export default HarryFilter;
