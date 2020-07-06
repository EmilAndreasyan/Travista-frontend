import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchCountries} from '../actions/fetchCountries';
import CountryInput from '../components/CountryInput';
import Countries from '../components/Countries';
import CountryShow from '../components/CountryShow'

class CountriesContainer extends React.Component {
	componentDidMount() {
		// undefined, though in actions fetches data (countries)
		this.props && this.props.fetchCountries();
	}
	
	render() {
		return (
			<div>
				<h1>Countries</h1>
				<Switch>
				{/* With Switch, /countries/new should be above /countries/:id, so that we have access to that, also, we don't need exact */}
				{/* <Link to='/countries/new' component={CountryInput}>Add New Country</Link> */}
				<Route path='/countries/new' component={CountryInput}/>
				{/* unlike render, component passes some props, like match, history */}
				<Route path="countries/:id" render={(routerProp) => <CountryShow {...routerProp} countries={this.props.countries}/>}/>
				<Route exact path="/countries" render={(routerProp) => <Countries {...routerProp} countries={this.props.countries}/>}/>
				{/* if we want to pass Route props via render, we should use routerProp */}
				{/* unlike component, render passes function, so that we have access to props*/}
				</Switch>
				<CountryInput/>
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
