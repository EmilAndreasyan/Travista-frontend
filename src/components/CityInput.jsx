import React from 'react';
import {connect} from 'react-redux';
import {addCity} from '../actions/addCity';

class CityInput extends React.Component {
    state = { name: '', image: '', population: '', description: '' }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value}) // bracket notation to be treated as key of object
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.props);
        // this.props.country.id is undefined
        this.props.addCity(this.state, this.props.country.id)
        this.setState({name: '', image: '', description: '', population: ''})
    }
    render() { 
        const {name, image, population, description} = this.state
        return ( 
            <>
             <form onSubmit={this.handleSubmit}>
        <label htmlFor="">City Name: 
<input type="text" onChange={this.handleChange} value={name} name='name'/></label><br/>
<label htmlFor="">Image: 
<input type="file" onChange={this.handleChange} value={image} name='image'/></label><br/>
<label htmlFor="">Population: 
<input type="text" onChange={this.handleChange} value={population} name='population'/></label><br/>
<label htmlFor="">Description: 
<input type="text" onChange={this.handleChange} value={description} name='description'/></label><br/>
<input type="submit"/>
    </form>
        <p>{name}{image}{population}{description}</p>
            </>
         );
    }
}
 
export default connect(null, {addCity})(CityInput);