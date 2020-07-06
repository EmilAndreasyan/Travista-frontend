import React from 'react';
import {connect} from 'react-redux';
import {deleteCity} from '../actions/deleteCity'

const Cities = (props) => {
    const handleDelete = (city) =>{
        props.deleteCity(city.id, city.country_id)
    }
    // props are undefined
    return (
        <>
        {/* will not perform map when undefined (props are undefined the FIRST time they run, that's why they need ti run only when they are true) */}
        {props.cities && props.cities.map(city => <li key={city.id}>{city.name} - {city.image} - {city.population} - {city.description}<button onClick={() => handleDelete(city)}>Delete</button></li>)}
        </>
    )
}

export default connect(null, {deleteCity})(Cities);