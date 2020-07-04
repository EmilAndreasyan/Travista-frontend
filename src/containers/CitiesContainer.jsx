import React from 'react';
import { connect } from 'react-redux';
import {fetchCities} from '../actions/fetchCities';
//import CityInput from '../components/CityInput'
import Cities from '../components/Cities'

class CitiesContainer extends React.Component {
    componentDidMount () {
        this.props.fetchCities()
    }
    render() { 
        return ( <div>
            {/* <CityInput/> */}
            <Cities cities={this.props.cities}/>
            </div> );
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}
 
export default connect(mapStateToProps, {fetchCities})(CitiesContainer);