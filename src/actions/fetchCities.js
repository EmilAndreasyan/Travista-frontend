export function fetchCities() {
	const BASE_URL = 'http://localhost:3000/api/v1'
	return (dispatch) => {
		fetch(`${BASE_URL}/countries/1/cities`).then((resp) => resp.json()).then((cities) =>
			dispatch({
				type: 'FETCH_CITIES',
				payload: cities
			})
		);
	};
}
