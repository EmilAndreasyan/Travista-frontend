import React from 'react';
import {connect} from 'react-redux';
import {editCity} from '../../actions/editCity';

class CityEdit extends React.Component {
    state = { name: '', image_url: '', population: '', description: '' }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value}) // bracket notation to be treated as key of object
    }

    handleEdit = event => {
        event.preventDefault()
        this.props.editCity(this.state, this.props.city.id, this.props.city.country_id)
        this.setState({name: '', image_url: '', description: '', population: ''})
    }
    render() { 
        const {name, image_url, population, description} = this.state
        return ( 
            <>
             <form onSubmit={this.handleEdit}>
        <label htmlFor="">City Name: 
<input type="text" onChange={this.handleChange} value={name} name='name'/></label><br/>
<label htmlFor="">Image: 
<input type="file" onChange={this.handleChange} value={image_url} name='image'/></label><br/>
<label htmlFor="">Population: 
<input type="text" onChange={this.handleChange} value={population} name='population'/></label><br/>
<label htmlFor="">Description: 
<input type="text" onChange={this.handleChange} value={description} name='description'/></label><br/>
<input type="submit" className="btn btn-primary"/>
    </form>
        <p>{name}</p><hr></hr>
        <p>{population}</p>
        <p>{description}</p>
            </>
         );
    }
}
 
export default connect(null, {editCity})(CityEdit);