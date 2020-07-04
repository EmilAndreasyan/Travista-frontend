import React from 'react';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom';
import {fetchCountries} from '../actions/fetchCountries';
import CountryForm from '../components/CountryForm';
import Countries from '../components/Countries';
import CountryShow from '../components/CountryShow'

class CountriesContainer extends React.Component {
	componentDidMount() {
		// undefined, though in actions fetches data (countries)
		
		this.props.fetchCountries();
	}
	
	render() {
		return (
			<div>
				<Route path='/countries/new' component={CountryForm}/>
				{/* unlike render, component passes some props, like match, history */}
				<Route path="countries/:id" render={(routerProp) => <CountryShow {...routerProp} countries={this.props.countries}/>}/>
				<Route exact path="/countries" render={(routerProp) => <Countries {...routerProp} countries={this.props.countries}/>}/>
				{/* if we want to pass Route props via render, we should use routerProp */}
				{/* unlike component, render passes function, so that we have access to props*/}
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
