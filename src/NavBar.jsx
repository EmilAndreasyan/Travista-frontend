import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CountriesContainer from './containers/CountriesContainer';
import HomeContainer from './containers/HomeContainer'
import CitiesAll from './components/cities/CitiesAll'
import {connect} from 'react-redux';
import {fetchCountries} from '../src/actions/fetchCountries'
//import Search from './Search'

class Navbar extends React.Component {
	// state = {query: '', setQuery: ''}
	componentDidMount() {
		this.props.fetchCountries()
	}
	render(){
		return (
<>
<Router>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			{/* <a class="navbar-brand" href="#">Navbar</a> */}
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
			  <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarColor01">
			  <ul className="navbar-nav mr-auto">
				<li className="nav-item active">
				<Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
				</li>
				<li className="nav-item">
				<Link to="/countries" className="nav-link">Countries</Link>
				</li>
				<li className="nav-item">
				<Link to="/cities/all" className="nav-link">Cities</Link>
				</li>
			  </ul>
			  <form className="form-inline my-2 my-lg-0">
			  {/* <Search getQuery={(q) => setQuery(q)}/>				 */}
				{/* <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> */}
			  </form>
			</div>
		  </nav>
		  <Switch>
				<Route exact path="/" component={HomeContainer}/>
				<Route path="/countries" component={CountriesContainer}/>
				<Route path="/cities/all" render={(routerProp) => <CitiesAll {...routerProp} countries={this.props.countries}/>}/>
			</Switch>
		  </Router>
</>
	);
}
};

// function Countries() {
// 	let match = useRouteMatch();
// 	return (
// 		<div>
// 			<h2>Countries</h2>
				
// 					<Link to={`${match.url}/cities`}>Cities</Link><br/>
// 					<Link to={`${match.url}/sightseeings`}>Sightseeings</Link>
// 			{/* The Topics page has its own <Switch> with more routes
//             that build on the /topics URL path. You can think of the
//             2nd <Route> here as an "index" page for all topics, or
// 		the page that is shown when no topic is selected */}
// 			<Switch>
// 				<Route path={`${match.path}/:topicId`}>
// 					<Topic />
// 				</Route>
// 				<Route path={match.path}>
// 					<h3>Please select a Country</h3>
// 					<CountriesContainer />
// 				</Route>
// 			</Switch>
// 		</div>
// 	);
// }

// function Topic() {
// 	let { topicId } = useParams();
// 	return <h3>{topicId}</h3>;
// }

const mapStateToProps = (state) => {
	return {
		countries: state.countries
	};
};

export default connect(mapStateToProps, {fetchCountries})(Navbar);

