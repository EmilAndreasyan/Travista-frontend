import React from 'react';
import { Link, Route } from 'react-router-dom';
import CityEdit from '../cities/CityEdit';

const CitiesAll = ({ countries, handleDelete, toggleLike }) => {
	return (
		<>
			{countries &&
				countries.map((country) => {
					return country.cities.map((city) => {
						return (
							<div key={city.id}
								className="card body m-3"
								style={{ maxWidth: '40rem' }}>
								{city ? (
										<div className="card-title text-white bg-primary mb-3">
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
											{/* error: toggleLike and handleDelete are not a functioning */}
											<button onClick={toggleLike} className="btn btn-add m-2">Like</button>
                                            {/* <button onClick={() => handleDelete(city)}
													className="btn btn-danger m-2">
													Delete {city.name}
											</button> */}
											<Link to={`/countries/${country.id}/cities/${city.id}/edit`}>
												<button className="btn btn-secondary m-2">Edit {city.name}</button>
											</Link>
										<Route
											path={`/countries/${country.id}/cities/${city.id}/edit`}
											render={(routerProps) => <CityEdit {...routerProps} city={city} />}
                                            />
                                            </div>							
								) : null}
							</div>
						);
					});
				})}
		</>
	);
};

export default CitiesAll;
