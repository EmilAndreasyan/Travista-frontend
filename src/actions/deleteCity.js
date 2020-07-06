export const deleteCity = (cityId, countryId) => {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return (dispatch) => {
        fetch(`${BASE_URL}/countries/${countryId}/cities/${cityId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(country => dispatch({type: 'DELETE_CITY', payload: country}))
    }

}