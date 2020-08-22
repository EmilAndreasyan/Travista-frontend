// import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import {connect} from 'react-redux';
// import {fetchCountries} from '../src/actions/fetchCountries'
// import Navbar from './NavBar'
// import HomeContainer from './containers/HomeContainer'
// import CountriesContainer from './containers/CountriesContainer';
// import CitiesAll from './components/cities/CitiesAll'
// //import CitiesContainer from './containers/CitiesContainer';

// class App extends React.Component {
//     state = {  }
//     componentDidMount() {
// 		this.props.fetchCountries()
// 	}
//     render() { 
//         return ( 
//             <Router>
//             <div className="jumbotron">
//                 <Navbar/>
// 				<Route exact path="/" component={HomeContainer}/>
// 				<Route path="/countries" component={CountriesContainer}/>
// 				<Route path="/cities/all" render={(routerProp) => <CitiesAll {...routerProp} countries={this.props.countries}/>}/>
//             </div>
//             </Router>
//          );
//     }
// }
 
// const mapStateToProps = (state) => {
// 	return {
// 		countries: state.countries
// 	};
// };

// export default connect(mapStateToProps, {fetchCountries})(App);


import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Dasboard from './Dashboard'

export default class App extends Component {
    state = { user: {} }

    handleLogin = data => {
        this.setState({user: data.user})
    }
    render() { 
        return ( 
            <div className="app">
                <Router>
                    <Switch>
                        <Route exact path="/"
                        render={props=>(
                            <Home {...props} handleLogin={this.handleLogin}/>
                        )}/>
                        <Route exact path="/dashboard"  render={props=>(
                            <Dasboard {...props} handleLogin={this.handleLogin}/>
                        )}/>
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
