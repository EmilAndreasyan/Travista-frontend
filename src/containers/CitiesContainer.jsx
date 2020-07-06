import React from 'react';
import { connect } from 'react-redux';
import {fetchCities} from '../actions/fetchCities';
import CityInput from '../components/CityInput'
import Cities from '../components/Cities'

class CitiesContainer extends React.Component {
    componentDidMount () {
        this.props.fetchCities()
    }
    render() { 
        return ( <div>
            <h1>Cities</h1>
            <CityInput cities={this.props.cities}/>
            <Cities cities={this.props.country && this.props.country.cities}/>
            {/* receives this.props.country.cities from CountryShow */}
            </div> );
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}
 
export default connect(mapStateToProps, {fetchCities})(CitiesContainer);