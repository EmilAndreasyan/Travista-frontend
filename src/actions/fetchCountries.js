export function fetchCountries() {
	const BASE_URL = 'http://localhost:3000/api/v1'
	return (dispatch) => {
		fetch(`${BASE_URL}/countries`).then((resp) => resp.json()).then((countries) =>
		dispatch({
				type: 'FETCH_COUNTRIES',
				payload: countries
			})
		);
	};
}
