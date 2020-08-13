import React from 'react';
import { connect } from 'react-redux';
import { deleteCity } from '../../actions/deleteCity';
import CityShow from './CityShow';
import CitiesAll from './CitiesAll';

class Cities extends React.Component {
	state = { liked: true, likedCities: [], dislikedCities: [] };

	handleDelete = (city) => {
		this.props.deleteCity(city.id, city.country_id);
	};

	toggleLike = (event) => {
		//debugger;
		let toggleColor = 'm-2 btn btn-';
		this.setState({ liked: !this.state.liked });
		if (this.state.liked) {
			event.target.innerHTML = 'liked';
			event.target.className = toggleColor + 'success';
			this.state.likedCities.push(this.props.cities);
			console.log('quantity of liked cities: ', this.state.likedCities.length);
		} else {
			event.target.innerHTML = 'disliked';
			event.target.className = toggleColor + 'warning';
			this.state.dislikedCities.push(this.props.cities);
			console.log('quantity of disliked cities: ', this.state.dislikedCities.length);
		}
	};

	render() {
		const { country, cities } = this.props;
		return (
			<div className="cards">
				{cities &&
					cities.map((city) => (
						<div key={city.id}>
							<CityShow
								handleDelete={this.handleDelete}
								city={city}
								country={country}
								toggleLike={this.toggleLike}
							/>
							<CitiesAll
								handleDelete={this.handleDelete}
								city={city}
								country={country}
								likedCities={this.state.likedCities}
								toggleLike={this.toggleLike}
							/>
						</div>
					))}
			</div>
		);
	}
}

export default connect(null, { deleteCity })(Cities);
