export const editCity = (city, cityId, countryId) => {
	const BASE_URL = 'http://localhost:3000/api/v1';
	return (dispatch) => {
		fetch(`${BASE_URL}/countries/${countryId}/cities/${cityId}`, {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
            method: 'PATCH',
            body: JSON.stringify(city)
        })
        .then(city => dispatch({
            type: 'EDIT_CITY', payload: city
        }))
	};
};
