export function fetchCountries() {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/countries').then((resp) => resp.json()).then((countries) =>
			dispatch({
				type: 'FETCH_COUNTRIES',
				payload: countries
			})
		);
	};
}
