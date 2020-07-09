import React from 'react';
// import {Redirect} from 'react-router-dom';
import {Link, Route, Switch} from 'react-router-dom'
import CountryEdit from './CountryEdit'
import CitiesContainer from '../../containers/CitiesContainer';

const CountryShow = (props) => {
    console.log(props);
    //let country = props.countries[props.match.params.id - 1] // index of array starts at 0, that's why -1
    //let country = country.filter(country => country.id === props.match.params.id)[0]
    return (
        <div className="card">
<h3>
{props.country ? (<div>{<img src={props.country.flag_url} alt={props.country.name}/>}<p> Language: {props.country.language}</p> <p> Currency: {props.country.currency}</p> <p>Area: {props.country.area}</p></div>) : null}
{/* when renders first time, country is undefined, so we want to return null first time and redner only when country is defined */}
</h3>
{/* <CitiesContainer cities={country.cities}/> */}
<button onClick={() => props.handleDelete(props.country)} className="btn btn-danger">Delete {props.country.name}</button><br/>
<Link to={`/countries/${props.country.id}/edit`}><button className="btn btn-secondary">Edit {props.country.name}</button></Link><br/>
<Link to={`/countries/${props.country.id}/cities`}>Explore cities of {props.country.name}</Link>
<Switch>
<Route path={`/countries/${props.country.id}/edit`} render={(routerProps) => <CountryEdit {...routerProps} country={props.country}/>}></Route>
<Route path={`/countries/${props.country.id}/cities`} render={(routerProps) => <CitiesContainer {...routerProps} country={props.country}/>}></Route>
</Switch>
</div>
    )
}

export default CountryShow;