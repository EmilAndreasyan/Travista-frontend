import React from 'react';
import {connect} from 'react-redux';
import {editCity} from '../../actions/editCity';

class CityEdit extends React.Component {
    state = { name: '', image_url: '', population: '', description: '', comment: '' }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({[name]: value}) // bracket notation to be treated as key of object
    }

    handleEdit = event => {
        event.preventDefault()
        this.props.editCity(this.state, this.props.city.id, this.props.city.country_id)
        this.setState({name: '', image_url: '', description: '', population: '', comment: ''})
    }
    render() { 
        const {name, image_url, population, description, comment} = this.state
        return ( 
            <>
             <form onSubmit={this.handleEdit}>
        <label htmlFor="">City Name: 
<input type="text" onChange={this.handleChange} value={name} name='name'/></label><br/>
<label htmlFor="">Image: 
<input type="text" onChange={this.handleChange} value={image_url} name='image_url'/></label><br/>
<label htmlFor="">Population: 
<input type="text" onChange={this.handleChange} value={population} name='population'/></label><br/>
<label htmlFor="">Description: 
<input type="text" onChange={this.handleChange} value={description} name='description'/></label><br/>
<label htmlFor="">Comment: 
<textarea onChange={this.handleChange} value={comment} name='comment'/></label><br/>
<input type="submit" className="btn btn-success"/>
    </form>
        <span><p>{name}</p></span>
        <span><p>{population}</p></span>
        <span><p>{description}</p></span>
        <span><p>{comment}</p></span>
            </>
         );
    }
}
 
export default connect(null, {editCity})(CityEdit);