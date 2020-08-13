Requirements
The code should be written in ES6 as much as possible
Use the create-react-app generator to start your project.
Follow the instructions on this repo to setup the generator: create-react-app
Your app should have one HTML page to render your react-redux application
There should be 2 container components
There should be 5 stateless components
There should be 3 routes
The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here)
Use Redux middleware to respond to and modify state change
Make use of async actions and redux-thunk middleware to send data to and receive data from a server
Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
Your client-side application should handle the display of data with minimal data manipulation
Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!
Once your app is complete, fill out this checklist.

git commit -m 'adding liked and disliked cities array'
- list countries
- when clicked on country, should display list of cities with name, description
- user should be able to like, rate, leave a comment, CRUD city
- when clicked on city, should diplay list of sightseings
- user should be able to like, rate, leave a comment, CRUD sightseengs
- add wish list for cities and/or countries
- add rating for cities and/or countries
- add user login/signup page

questions: 
- Routing in React, switch, routerProp, match.url, useRouteMatch, useParams
- fetches countryId/cities, but not all cities from Navbar

add login form
import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

add wish list for cities to go

 <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>

state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
          onChangeType = ({ target: {value}}) => {
  this.setState({filters: {...this.state.filters, type: value}})
}


 componentDidMount () {
  this.interval = setInterval(this.clockTick, 1000) 
  }
  
   componentWillUnmount () {
     clearInterval(this.interval)
   }
