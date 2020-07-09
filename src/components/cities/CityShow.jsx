import React from 'react';
import CityInput from './CityInput';
import CityEdit from './CityEdit';
import { Link, Route, Switch } from 'react-router-dom';

const CityShow = ({ city, handleDelete, country }) => {
	return (
		<div className="card">
			{city ? (
				<div>
					{city.name} {<img src={city.image_url} alt={city.name} />}
					<p>Population: {city.population}</p>
					<br /> <p>Description: {city.description}</p>
					<br />{' '}
					{
						<button onClick={() => handleDelete(city)} className="btn btn-danger">
							Delete city
						</button>
					}
				</div>
			) : null}
			<br />

			<Link to={`/countries/${country.id}/cities/${city.id}/edit`}><button className="btn btn-secondary">Edit {city.name}</button></Link>
			<Link to={`/countries/${country.id}/cities/new`}>
				<button className="btn btn-success">Add new city</button>
			</Link>
			<Switch>
				<Route
					path={`/countries/${country.id}/cities/${city.id}/edit`}
					render={(routerProps) => <CityEdit {...routerProps} city={city} />}
				/>
				{/* <Route
					path={`/countries/${country.id}/cities/new`}
					render={(routerProps) => (
						<CityInput {...routerProps} city={this.props.country && this.props.country.city} />
					)}
				/> */}
                <Route
					path={`/countries/${country.id}/cities/new`}
					render={(routerProps) => (
						<CityInput {...routerProps} city={city} country={country}/>
					)}
				/>
			</Switch>
		</div>
	);
};

export default CityShow;
