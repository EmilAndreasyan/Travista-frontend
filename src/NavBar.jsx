import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import CitiesContainer from './containers/CitiesContainer';
import CountriesContainer from './containers/CountriesContainer';
import SightseeingsContainer from './containers/SightseeingsContainer';
import HomeContainer from './containers/HomeContainer'

class Navbar extends React.Component {
	render(){
	return (
<>
		<Router>
			<ul className='navbar'>
				<Link to="/">Home</Link>
				<Link to="/countries">Countries</Link>
				<Link to="/cities">Cities</Link>
				<Link to="/sightseeings">Sightseeings</Link>
			</ul>
			<Switch>
				<Route exact path="/" component={HomeContainer}/>
				<Route path="/countries" component={CountriesContainer}/>
				<Route path="/sightseeings" component={SightseeingsContainer}/>
				<Route path="/cities" component={CitiesContainer}/>
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

export default Navbar;
