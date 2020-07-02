export default function fetchSightseeings() {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/sightseeings').then((resp) => resp.json()).then((sightseeings) =>
			dispatch({
				type: 'FETCH_SIGHTSEEINGS',
				payload: sightseeings
			})
		);
	};
}
