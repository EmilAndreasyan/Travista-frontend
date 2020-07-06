export const editCountry = (data) => {
	// data == this.state from CountryEdit
	const BASE_URL = 'http://localhost:3000/api/v1';
	return (dispatch) => {
		fetch(`${BASE_URL}/countries/${data.id}`, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			method: 'PATCH',
			body: JSON.stringify(data)
		})
			.then((resp) => resp.json())
			.then((country) => dispatch({ type: 'EDIT_COUNTRY', payload: country }));
	};
};
