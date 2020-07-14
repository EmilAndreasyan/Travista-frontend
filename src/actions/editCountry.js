export const editCountry = (country, countryId) => {
	// data == this.state from CountryEdit
	//debugger
	const BASE_URL = 'http://localhost:3000/api/v1';
	return (dispatch) => {
		fetch(`${BASE_URL}/countries/${countryId}`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			method: 'PATCH',
			body: JSON.stringify(country)
		})
			.then((resp) => resp.json())
			.then(
				(country) => 
				dispatch({ type: 'EDIT_COUNTRY', payload: country })
			);
	};
};

// export const editCountry = (country, countryId) => {
// 	// data == this.state from CountryEdit
// 	const BASE_URL = 'http://localhost:3000/api/v1';
// 	return (dispatch) => {
// 		fetch(`${BASE_URL}/countries/${countryId}`, {
// 			headers: {
// 				'Content-Type': 'application/json',
// 				Accept: 'application/json'
// 			},
// 			method: 'PATCH',
// 			body: JSON.stringify(country)
// 		})
// 			.then((resp) => resp.json())
// 			.then((country) => dispatch({ type: 'EDIT_COUNTRY', payload: country }));
// 	};
// };
