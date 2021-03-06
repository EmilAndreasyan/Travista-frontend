import React from 'react'
import {connect} from 'react-redux';
import {addCountry} from '../../actions/addCountry';

class CountryInput extends React.Component {
    state = { name: '', flag_url: '', capital: '', language: '', currency: '', area: '' }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({[name]: value}) // without brackets will not interpret name as key of object!
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCountry(this.state)
    this.setState({name: '', flag_url: '', capital: '', language: '', currency: '', area: '' })
    }

    render() { 
        const {name, flag_url, capital, language, currency, area} = this.state
        return ( 
        <>
    <form onSubmit={this.handleSubmit} className="cards">
        <label htmlFor="">Country Name: 
<input type="text" onChange={this.handleChange} value={name} name='name'/></label><br/>
<label htmlFor="">Flag: 
<input type="text" onChange={this.handleChange} value={flag_url} name='flag_url' accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"></input></label><br/>
<label htmlFor="">Capital: 
<input type="text" onChange={this.handleChange} value={capital} name='capital'/></label><br/>
<label htmlFor="">Language: 
<input type="text" onChange={this.handleChange} value={language} name='language'/></label><br/>
<label htmlFor="">Currency: 
<input type="text" onChange={this.handleChange} value={currency} name='currency'/></label><br/>
<label htmlFor="">Area: 
<input type="text" onChange={this.handleChange} value={area} name='area'/></label><br/>
<input type="submit" className="btn btn-success"/>
    </form>
        <p>{this.state.name}</p>
        <p>{this.state.capital}</p>
        <p>{this.state.language}</p>
        <p>{this.state.currency}</p>
        <p>{this.state.area}</p>
        </> );
    }
}
 
export default connect(null, {addCountry})(CountryInput);