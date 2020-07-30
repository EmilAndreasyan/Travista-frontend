import React from 'react';
import { connect } from 'react-redux';
import { fetchCities } from '../actions/fetchCities';
import Cities from '../components/cities/Cities';

class CitiesContainer extends React.Component {
	componentDidMount() {
		this.props.fetchCities(this.props.country.id);
	}
	render() {
		return (
			<div>
				<Cities cities={this.props.country.cities} country={this.props.country}/>
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
