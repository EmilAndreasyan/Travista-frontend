import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions/fetchCountries';
import CountryInput from '../components/CountryInput';
import Countries from '../components/Countries';

class CountriesContainer extends React.Component {
	componentDidMount() {
		this.props.fetchCountries();
	}
	render() {
		return (
			<div>
				<CountryInput />
				<Countries countries={this.props.countries}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		countries: state.countries
	};
};

export default connect(mapStateToProps, {fetchCountries})(CountriesContainer);
