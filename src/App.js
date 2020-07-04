import React from 'react';
import { connect } from 'react-redux';
//import fetchCities from '../actions/fetchCities'
import CountriesContainer from './containers/CountriesContainer';
import CitiesContainer from './containers/CitiesContainer';
import SightseeingsContainer from './containers/SightseeingsContainer';
import NavBar from './NavBar';

class App extends React.Component {
	state = {};

	// componentDidMount () {
	//   this.props.fetchCities()
	// }

	render() {
		return (
			<div className="App">
				<NavBar />
				<CountriesContainer />
				<CitiesContainer />
				<SightseeingsContainer />
			</div>
		);
	}
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   }
// }
//const mapDispatchToProps
export default connect()(App);
