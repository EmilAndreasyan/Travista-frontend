import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CountryEdit from './CountryEdit';
import CitiesContainer from '../../containers/CitiesContainer';
import CityInput from '../cities/CityInput';

const CountryShow = ({ country, handleDelete, match }) => {
	//let country = props.countries[props.match.params.id - 1] // index of array starts at 0, that's why -1
	//let country = country.filter(country => country.id === props.match.params.id)[0]
	return (
		<div className="card text-white bg-secondary mb-3" style={{ maxWidth: '20rem' }}>
			<div className="card-body bg-secondary">
				<h4 className="card-title">
					{country ? (
						<div>
							{
								<img
									src={country.flag_url}
									alt={country.name}
									style={{ height: '200px', width: '100%', display: 'block' }}
								/>
							}
							<p>{country.name}</p>
							<p> Language: {country.language}</p> <p> Currency: {country.currency}</p>{' '}
							<p>Area: {country.area} mi²</p>
						</div>
					) : null}
				</h4>
				<button onClick={() => handleDelete(country)} className="btn btn-danger">
					Delete {country.name}
				</button>
				<br />
				<Link to={`${match.url}/edit`}>
					<button className="btn btn-secondary">Edit {country.name}</button>
				</Link>
				<br />
				<Link to={`${match.url}/cities`}><button className="btn btn-outline-light">Explore cities of {country.name}</button>
				</Link>
				<Link to={`${match.url}/cities/new`}>
					<button className="btn btn-success m-2">Add new city</button>
				</Link>
				{/* <Link to={`/countries/${country.id}/edit`}>
					<button className="btn btn-secondary">Edit {country.name}</button>
				</Link> */}
				{/* <Link to={`/countries/${country.id}/cities`}><button className="btn btn-outline-light">Explore cities of {country.name}</button>
				</Link> */}
				{/* <Link to={`/countries/${country.id}/cities/new`}>
					<button className="btn btn-success m-2">Add new city</button>
				</Link> */}
				<Switch>
					
					<Route path={`${match.url}/edit`} render={(props) => <CountryEdit {...props} country={country}/>}/>
					<Route path={`${match.url}/cities/new`} render={(props) => <CityInput {...props} country={country}/>}/>
					<Route path={`${match.url}/cities`} render={(props) => <CitiesContainer {...props} country={country}/>}/>

					{/* <Route
						path={`/countries/${country.id}/edit`}
						render={(routerProps) => <CountryEdit {...routerProps} country={country} />}
					/> */}	
					{/* <Route path={`/countries/${country.id}/cities/new`} render={(routerProps) => <CityInput {...routerProps} country={country}/>} /> */}
					{/* <Route
						path={`/countries/${country.id}/cities`}
						render={(routerProps) => <CitiesContainer {...routerProps} country={country} />}
					/> */}
					{/* <Route
							exact path={`/countries/${country.id}/cities/new`}
							render={(routerProps) => <CityInput {...routerProps} city={country.city} country={country} />}
						/> */}

				</Switch>
			</div>
		</div>
	);
};

CountryShow.defaultProps = {
	flag_url: 'http://i.imgur.com/bJw8ndW.png'
}

export default CountryShow;
