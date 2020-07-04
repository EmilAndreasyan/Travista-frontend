import React from 'react';

const CountryShow = (props) => {
    let country = props.countries[props.match.params.id - 1] // index of array starts at 0, that's why -1
    return (
<>
{/* {country ? country.name : null} - {country ? country.flag : null} - {country ? country.language : null} - {country ? country.currency : null} - {country ? country.area : null} */}
{country ? (<li>{country.name} - {country.flag} - {country.language} - {country.currency} - {country.area}</li>) : null}
{/* when renders first time, country is undefined, so we want to return null first time and redner only when country is defined */}
</>
    )
}

export default CountryShow;