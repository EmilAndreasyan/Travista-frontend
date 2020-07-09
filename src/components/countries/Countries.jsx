import React from 'react';
import {Link} from 'react-router-dom';
import CountryShow from './CountryShow'
import {connect} from 'react-redux';
import {deleteCountry} from '../../actions/deleteCountry'
import { render } from '@testing-library/react';

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
				<ul key={country.id}>
					<Link to={`/countries/${country.id}`}><li>{country.name}</li></Link><CountryShow country={country} handleDelete={this.handleDelete}/>
				</ul>
			))}
		</div>
	);
}
};

export default connect(null, {deleteCountry})(Countries);
