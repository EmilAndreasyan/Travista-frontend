import React from 'react';
import CountryShow from './CountryShow'
import {connect} from 'react-redux';
import {deleteCountry} from '../../actions/deleteCountry'
import { Route, Link } from 'react-router-dom';

class Countries extends React.Component {
	handleDelete = (country) =>{
		// make sure city.id and city.county_id are working
		this.props.deleteCountry(country.id)
	}
	render(){
		const {countries} = this.props
	return (

		
		<div className="cards">
		
			{countries && countries.map((country) => (
				<div key={country.id}>
					<Link to={`/countries/${country.id}`} className="btn btn-success bg-info mt-2 mb-2">{country.name}</Link>
					<Route path={`/countries/${country.id}`} render={(props) => <CountryShow {...props} country={country} handleDelete={this.handleDelete}/>}/>
				
					{/* <CountryShow country={country} handleDelete={this.handleDelete}/> */}
				</div>
			))}
		</div>
	);
}
};

export default connect(null, {deleteCountry})(Countries);
