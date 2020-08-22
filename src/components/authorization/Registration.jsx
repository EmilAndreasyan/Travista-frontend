

import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {

    state = {
        email: "",
        password: "" 
    }

    handleSubmit = event => {
        event.preventDefault()
        const {email, password} = this.state
    axios.post("http://localhost:3000/registrations", {
        user: { email, password }
    }, {withCredentials: true})
    .then(resp => {
        if (resp.data.logged_in){
        this.props.handleAuth(resp.data)
    }
    })
    }

    handeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <>
           <form onSubmit={this.handleSubmit} className="form-control">
            <input type="email" name="email" value={this.state.email} 
            onChange={this.handeChange} required/>
            <input type="password" name="password" value={this.state.password}
            onChange={this.handeChange}/>
            <button type="submit">Register</button>
            </form>
            </>
        )
    }
}
