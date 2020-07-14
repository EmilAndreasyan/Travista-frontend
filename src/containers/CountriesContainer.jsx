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
			<>
				<Link to='/countries/new' className="card-title text-white-50 bg-info mb-3">Add New Country</Link><br/>
				<Switch>
				{/* With Switch, /countries/new should be above /countries/:id, so that we have access to that, also, we don't need exact */}
				<Route path='/countries/new' component={CountryInput}/>
				{/* unlike render, component passes some props, like match, history */}
				{/* <Route path="countries/:id" render={(routerProp) => <CountryShow {...routerProp} countries={this.props.countries}/>}/> */}
				<Route path="/countries" render={(routerProp) => <Countries {...routerProp} countries={this.props.countries}/>}/>
	
				{/* if we want to pass Route props via render, we should use routerProp */}
				{/* unlike component, render passes function, so that we have access to props*/}
				</Switch>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		countries: state.countries
	};
};

export default connect(mapStateToProps, {fetchCountries})(CountriesContainer);
