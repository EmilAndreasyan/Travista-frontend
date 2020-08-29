// import React, { Component } from 'react';
// import Registration from '../components/authorization/Registration.jsx'

// class HomeContainer extends Component {
//         render(){
//         return ( 
//         <><h1>Welcome to Travista</h1>
//         <h3><i>Travel experience worthy seeing and memorizing</i></h3>
//         <h4>Here you can bookmark your favorite destinations and change them</h4>
//         <Registration/>
//         </> 
//         );
// }
// }
 
// export default HomeContainer;


import React, { Component } from 'react';
import Registration from './components/authorization/Registration'
import Login from './components/authorization/Login'

export default class Home extends Component {

        handleAuth = (data) => {
        this.props.handleLogin(data)
        // if successfully registered or logged in, will be redirected to "/dashboard"
        this.props.history.push("/dashboard")
        }

        render(){
        return ( 
        <>
        <Registration handleAuth={this.handleAuth}/>
        <Login handleAuth={this.handleAuth}/>
        <h1>Welcome to Travista</h1>
        <h3><i>Travel experience worthy seeing and memorizing</i></h3>
        <h4>Here you can bookmark your favorite destinations and change them</h4>
        </> 
        );
}
}
 