import React from 'react'
import {connect} from 'react-redux';
import {editCountry} from '../actions/editCountry';

class CountryEdit extends React.Component {
    state = { name: '', flag: '', capital: '', language: '', currency: '', area: '' }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({[name]: value}) // without brackets will interpret name as key of object!
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let country = {...this.state, id: this.props.country.id}
        this.props.editCountry(country)
    this.setState({name: '', flag: '', capital: '', language: '', currency: '', area: '' })
    }

    render() { 
        const {name, flag, capital, language, currency, area} = this.state
        return ( 
        <>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Country Name: 
<input type="text" onChange={this.handleChange} value={name} name='name'/></label><br/>
<label htmlFor="">Flag: 
<input type="file" onChange={this.handleChange} value={flag} name='flag'/></label><br/>
<label htmlFor="">Capital: 
<input type="text" onChange={this.handleChange} value={capital} name='capital'/></label><br/>
<label htmlFor="">Language: 
<input type="text" onChange={this.handleChange} value={language} name='language'/></label><br/>
<label htmlFor="">Currency: 
<input type="text" onChange={this.handleChange} value={currency} name='currency'/></label><br/>
<label htmlFor="">Area: 
<input type="text" onChange={this.handleChange} value={area} name='area'/></label><br/>
<input type="submit" value="Update"/>
    </form>
        <p>{this.state.name}</p>
        <p>{this.state.flag}</p>
        <p>{this.state.capital}</p>
        <p>{this.state.language}</p>
        <p>{this.state.currency}</p>
        <p>{this.state.area}</p>
        </> );
    }
}
 
export default connect(null, {editCountry})(CountryEdit);