import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch, Link} from 'react-router-dom';
import {fetchCountries} from '../actions/fetchCountries';
import CountryInput from '../components/countries/CountryInput';
import Countries from '../components/countries/Countries';

class CountriesContainer extends React.Component {
	
	componentDidMount() {
		this.props.fetchCountries();
	}
	
	render() {
		return (
			<div>
	{/* {this.props.countries.map(country => {
		return (<Link to={`countries/${country.id}`}><h3>{country.name}, capital: {country.capital}</h3></Link>)
	})} */}
				<Link to='/countries/new'>Add New Country</Link>
				<Switch>
				{/* With Switch, /countries/new should be above /countries/:id, so that we have access to that, also, we don't need exact */}
				<Route path='/countries/new' component={CountryInput}/>
				{/* unlike render, component passes some props, like match, history */}
				{/* <Route path="countries/:id" render={(routerProp) => <CountryShow {...routerProp} countries={this.props.countries}/>}/> */}
				<Route path="/countries" render={(routerProp) => <Countries {...routerProp} countries={this.props.countries}/>}/>
	
				{/* if we want to pass Route props via render, we should use routerProp */}
				{/* unlike component, render passes function, so that we have access to props*/}
				</Switch>
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
