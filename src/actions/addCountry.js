export function addCountry (country) { // country == this.state from CountryInput
    const BASE_URL = 'http://localhost:3000/api/v1'
    return (dispatch) => {
    fetch(`${BASE_URL}/countries`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(country)
    })
    .then(resp => resp.json())
    .then(country => {
        if(country.error) {
            alert(country.error)
        } else {
            dispatch({type: 'ADD_COUNTRY', payload: country}
            )}
    })}
}
