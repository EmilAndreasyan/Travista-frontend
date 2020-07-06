import React from 'react';
import NavBar from './NavBar';

class App extends React.Component {
	state = {};

	render() {
		return (
			<div className="App">
				<NavBar />	
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
export default App;
