import React from 'react';
import CountryShow from './CountryShow'

const Countries = (props) => { // props are undefined
	return (
		<>
			{props.countries.map((country) => (
				<div key={country.id}>
					<CountryShow country={country}/>
				</div>
			))}
		</>
	);
};

export default Countries;
