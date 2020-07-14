import React from 'react';
import CityEdit from './CityEdit';
import { Link, Route} from 'react-router-dom';

const CityShow = ({ city, handleDelete, country, toggleLike }) => {
	return (
		<div className="card text-white bg-primary mt-3" style={{ maxWidth: '20rem' }}>
			{city ? (
				<div className="card-body text-white bg-primary mb-3">
					<div className="card-title">
						{city.name}{' '}
						{
							<img
								src={city.image_url}
								alt={city.name}
								style={{ height: '150px', width: '100%', display: 'block' }}
							/>
						}
						Population: {city.population}
						<br />
						Description: {city.description}
						<br />
						{
							<button onClick={() => handleDelete(city)} className="btn btn-danger m-2">
								Delete {city.name}
							</button>
						}
						<button onClick={toggleLike} className="btn btn-add m-2">Like</button>
					</div>
					<Link to={`/countries/${country.id}/cities/${city.id}/edit`}>
						<button className="btn btn-secondary m-2">Edit {city.name}</button>
					</Link>
					<br />
					<Route
						path={`/countries/${country.id}/cities/${city.id}/edit`}
						render={(routerProps) => <CityEdit {...routerProps} city={city} />}
					/>
				</div>
			) : null}
		</div>
	);
};

export default CityShow;
