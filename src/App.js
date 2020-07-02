import React from 'react';
import {connect} from 'react-redux';
import fetchItems from './actions/fetchItems'

class App extends React.Component {
  state = {  }

  componentDidMount () {
    this.props.fetchItems()
  }

  render() { 
    return (
      <div className="App">
        Hello World
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
export default connect(null, {fetchItems})(App);

