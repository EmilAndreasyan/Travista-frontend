import React from 'react';
import {connect} from 'react-redux';
import {deleteCity} from '../../actions/deleteCity'
import CityShow from './CityShow'
import CitiesAll from './CitiesAll';

class Cities extends React.Component {

    state = {liked: true}

    handleDelete = (city) =>{
        // make sure city.id and city.county_id are working
        this.props.deleteCity(city.id, city.country_id)
    }

    toggleLike = (event) => {
        let toggleColor = "m-2 btn btn-"
        this.setState({liked: !this.state.liked})
        if (this.state.liked) {
        event.target.innerHTML = 'liked';
        event.target.className = toggleColor + "success"
        } else {
            event.target.innerHTML = 'disliked';
        event.target.className = toggleColor + "warning"
        }
    }

    render (){
        const {country, cities} = this.props
        return (
            <div className="cards">
            {cities && cities.map(city => (
                <div key={city.id}>
                    <CityShow handleDelete={this.handleDelete} city={city} country={country} toggleLike={this.toggleLike}/>
                    <CitiesAll handleDelete={this.handleDelete} city={city} country={country} toggleLike={this.toggleLike}/>
                </div>
            ))}
            </div>
        )
    }
}

export default connect(null, {deleteCity})(Cities);