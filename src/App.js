import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer';
import HomeContainer from './containers/HomeContainer'
import CitiesAll from './components/cities/CitiesAll'
import {connect} from 'react-redux';
import {fetchCountries} from '../src/actions/fetchCountries'
import Navbar from './NavBar'

class App extends React.Component {
    state = {  }
    componentDidMount() {
		this.props.fetchCountries()
	}
    render() { 
        return ( 
            <Router>
            <div className="jumbotron">
                <Navbar/>
				<Route exact path="/" component={HomeContainer}/>
				<Route path="/countries" component={CountriesContainer}/>
				<Route path="/cities/all" render={(routerProp) => <CitiesAll {...routerProp} countries={this.props.countries}/>}/>
            </div>
            </Router>
         );
    }
}
 
const mapStateToProps = (state) => {
	return {
		countries: state.countries
	};
};

export default connect(mapStateToProps, {fetchCountries})(App);