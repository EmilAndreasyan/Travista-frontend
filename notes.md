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


list countries
when clicked on country, should display list of cities with name, description
user should be able to like, rate, leave a comment, CRUD city
when clicked on city, should diplay list of sightseengs
user should be able to like, rate, leave a comment, CRUD sightseengs

questoions: 
- countries are undefined, maybe this is why in redux store there are no countries, but there are users?? In Redux devtools tree, users have countries folder, as well as cities have countries folder
- Routing in React, switch, routerProp
- when creating Country with React, doesn't pass id
- in Cities, make sure city.id and city.county_id are working when invoked by delete button
- need to somehow pass id of the country when fetching cities, to see associated cities
- syntax error in deleteCountries action
- how to add flag_url and img_url in input type="file"?
- fetches countryId/cities, but not all cities from Navbar
- <Link to={`countries/${this.props.country.id}/cities/new`}>Add new city</Link> doesn't show the CityInput component
