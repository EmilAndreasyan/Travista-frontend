export default function fetchCities() {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/cities').then((resp) => resp.json()).then((cities) =>
			dispatch({
				type: 'FETCH_CITIES',
				payload: cities
			})
		);
	};
}
