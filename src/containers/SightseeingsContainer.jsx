import React from 'react';
import { connect } from 'react-redux';
import {fetchSightseeings} from '../actions/fetchSightseeings'
//import SightseeingInput from '../components/SightseeingInput'
import Sightseeings from '../components/Sightseeings'

class SightseeingsContainer extends React.Component {
    componentDidMount (){
        this.props.fetchSightseeings()
    }
    render() { 
        return ( <div>
            {/* <SightseeingInput/> */}
            <Sightseeings sightseeings={this.props.sightseeings}/>
            </div> );
    }
}

const mapStateToProps = state => {
    return {
        sightseeings: state.sightseeings
    }
}
 
export default connect(mapStateToProps, {fetchSightseeings})(SightseeingsContainer);
