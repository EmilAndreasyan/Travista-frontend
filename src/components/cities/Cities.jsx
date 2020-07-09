import React from 'react';
import {connect} from 'react-redux';
import {deleteCity} from '../../actions/deleteCity'
import { Link } from 'react-router-dom';
import CityShow from './CityShow'

class Cities extends React.Component {

    handleDelete = (city) =>{
        // make sure city.id and city.county_id are working
        this.props.deleteCity(city.id, city.country_id)
    }
    render (){
        const {country, cities} = this.props
        return (
            <div className="cards">
            {cities && cities.map(city => (
                <ul key={city.id}>
                    <Link to={`/countries/${country.id}/cities/${city.id}`}><li>{city.name}</li></Link><CityShow handleDelete={this.handleDelete} city={city} country={country}/>
                </ul>
            ))}
           {/* <CityShow handleDelete={this.handleDelete} cities={this.props.cities}/> */}
            </div>
        )
    }
   
}

export default connect(null, {deleteCity})(Cities);