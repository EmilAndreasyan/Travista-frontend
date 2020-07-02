import React from 'react';

const Countries = (props) => {
	return (
		<div>
			{props.countries.map((country) => (
				<li key={country.id}>
					{country.name} - {country.flag} - {country.language} - {country.currency} - {country.area}
				</li>
			))}
		</div>
	);
};

export default Countries;
