export const deleteCountry = (countryId) => {
	//debugger 
	// syntax error
	const BASE_URL = 'http://localhost:3000/api/v1';
	return (dispatch) => {
		fetch(`${BASE_URL}/countries/${countryId}`, {
			method: 'DELETE'
		})
            .then((country) => 
            dispatch({ type: 'DELETE_COUNTRY', payload: country }));
	};
};
