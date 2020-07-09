import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/fetchCities';

import Cities from '../components/cities/Cities';

class CitiesContainer extends React.Component {
	componentDidMount() {
		// fetches cities of country.id, but how to invoke all cities without countries from navbar?
		this.props.fetchCities(this.props.country.id);
		//  || this.props.fetchCities(this.props)
	}
	render() {
		return (
			<div>
				<Cities cities={this.props.country.cities} country={this.props.country}/>
				{/* <Cities country={this.props.country}/> */}
				{/* receives this.props.country.cities from CountryShow */}
				
				
                {/* <CityInput cities={this.props.country && this.props.cities}/> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		cities: state.countries
	};
};

export default connect(mapStateToProps, { fetchCities })(CitiesContainer);
