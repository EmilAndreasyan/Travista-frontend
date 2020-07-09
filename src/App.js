import React from 'react';
import Navbar from './NavBar'

class App extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="jumbotron">
                <Navbar/>
            </div>
         );
    }
}
 
export default App;