export function addCity(city, countryId) {
	// city == this.state and countryId == this.props.country.id from CityForm
	return (dispatch) => {
		const BASE_URL = 'http://localhost:3000/api/v1';
		fetch(`${BASE_URL}/countries/${countryId}/cities`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(city)
		})
			.then((resp) => resp.json())
			.then((country) => {
				if (country.error) {
					alert(country.error);
				} else {
					dispatch({type: 'ADD_CITY', payload: country});
				}
			});
	};
}
