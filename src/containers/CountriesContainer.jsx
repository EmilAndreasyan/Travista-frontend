import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch, Link} from 'react-router-dom';
//import {fetchCountries} from '../actions/fetchCountries';
import CountryInput from '../components/countries/CountryInput';
import Countries from '../components/countries/Countries';


class CountriesContainer extends React.Component {
	state = { search: ''}

	handleSearch = event => {
		const {name, value} = event.target
		this.setState({[name]: value})
	}
	render() {
		return (
			<>
			<input type="text" name="search" className="form-control" value={this.state.search} onChange={this.handleSearch} placeholder="search for a country"/>
				<Link to='/countries/new' className="btn btn-success bg-info mt-2 mb-2">Add New Country</Link><br/>
				<Switch>
				{/* With Switch, /countries/new should be above /countries/:id, so that we have access to that, also, we don't need exact */}
				<Route path='/countries/new' component={CountryInput}/>
				{/* unlike render, component passes some props, like match, history */}
				{/* <Route path="countries/:id" render={(routerProp) => <CountryShow {...routerProp} countries={this.props.countries}/>}/> */}
				<Route path="/countries" render={(routerProp) => <Countries {...routerProp} countries={this.props.countries.filter(country => country.name.toLowerCase().includes(this.state.search.toLowerCase()))}/>}/>
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

export default connect(mapStateToProps)(CountriesContainer);
