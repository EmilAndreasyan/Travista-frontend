export function addCountry (data) { // data == this.state from CountryInput
    const BASE_URL = 'http://localhost:3000/api/v1'
    return (dispatch) => {
    fetch(`${BASE_URL}/countries`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(country => dispatch({type: 'ADD_COUNTRY', payload: country}))
}
}