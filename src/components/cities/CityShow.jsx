import React from 'react'
import CityInput from './CityInput';
import { Link, Route } from 'react-router-dom';

const CityShow = ({city, handleDelete, country}) => {
    return (
        <div className="card">
            {city ? (<div>{city.name} {<img src={city.image_url} alt={city.name}/>}<p>Population: {city.population}</p><br/> <p>Description: {city.description}</p><br/> {<button onClick={() => handleDelete(city)} className="btn-delete">Delete city</button>}</div>) : null}<br/>
            <Link to={`/countries/${country.id}/cities/new`}><button className="btn-add">Add new city</button></Link>
              <Route	path={`/countries/${country.id}/cities/new`}
					render={(routerProps) => <CityInput {...routerProps} city={this.props.country && this.props.country.city} />}
				/>
        </div>
    )
}

export default CityShow;
