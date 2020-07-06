import React from 'react';
import {Link} from 'react-router-dom';
import CountryShow from './CountryShow'

const Countries = (props) => { // props are undefined
	return (
		<>
			{props.countries && props.countries.map((country) => (
				<li key={country.id}>
					<Link to={`/countries/${country.id}`}>{country.name}<CountryShow country={props.country}/></Link>
				</li>
			))}
		</>
	);
};

export default Countries;
