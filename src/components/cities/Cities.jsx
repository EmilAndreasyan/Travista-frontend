import React from 'react';
import { deleteCity } from '../../actions/deleteCity';
import CityShow from './CityShow';
import CitiesAll from './CitiesAll';
import { connect } from 'react-redux';

class Cities extends React.Component {
	state = { liked: true, likedCities: [], dislikedCities: [] };

	toggleLike = (event) => {
		//debugger;
		let toggleColor = 'm-2 btn btn-';
		this.setState({ liked: !this.state.liked });
		if (this.state.liked) {
			event.target.innerHTML = 'liked';
			event.target.className = toggleColor + 'success';
			this.state.likedCities.push(this.props.cities);
		} else {
			event.target.innerHTML = 'disliked';
			event.target.className = toggleColor + 'warning';
			this.state.dislikedCities.push(this.props.cities);
		}
	};

	handleDelete = (city) => {
		this.props.deleteCity(city.id, city.country_id);
	};


	render() {
		const { country, cities } = this.props;
		return (
			<div className="cards">
				{cities &&
					cities.map((city) => (
						<div key={city.id}>
							<CityShow
								city={city}
								country={country}
								handleDelete={this.handleDelete}
								toggleLike={this.toggleLike}
							/>
							<CitiesAll
								city={city}
								country={country}
								likedCities={this.state.likedCities}
								handleDelete={this.handleDelete}
								toggleLike={this.toggleLike}
							/>
						</div>
					))}
			</div>
		);
	}
}

export default connect(null, {deleteCity})(Cities);
