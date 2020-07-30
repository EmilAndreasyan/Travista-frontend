import React from 'react';
import CountryShow from './CountryShow'
import {connect} from 'react-redux';
import {deleteCountry} from '../../actions/deleteCountry'

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
					{/* <Link to={`/countries/${country.id}`}><li>{country.name}</li></Link> */}
					<CountryShow country={country} handleDelete={this.handleDelete}/>
				</div>
			))}
		</div>
	);
}
};

export default connect(null, {deleteCountry})(Countries);
