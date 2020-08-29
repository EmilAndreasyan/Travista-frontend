import React, { Component } from 'react';
//import axios from 'axios';

export default class Registration extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password_confirmation: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        const {firstName, lastName, email, password, password_confirmation} = this.state
        fetch(`http://localhost:3000/api/v1/registrations`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(firstName, lastName, email, password, password_confirmation)
        })
        .then(resp => resp.json())
        .then(data =>console.log(data))
    // axios.post("http://localhost:3000/api/v1/registrations", {
    //     user: { firstName, lastName, email, password, password_confirmation }
    // }, {withCredentials: true})
    // .then(resp => {
    //     if (resp.data.logged_in){
    //     this.props.handleAuth(resp.data)
    // }
    // })
    }

    handeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <>
           <form onSubmit={this.handleSubmit} className="form-control">
           <input type="text" name="firstName" value={this.state.firstName} 
            onChange={this.handeChange}/>
            <input type="text" name="lastName" value={this.state.lastName} 
            onChange={this.handeChange}/>
            <input type="email" name="email" value={this.state.email} 
            onChange={this.handeChange} required/>
            <input type="password" name="password" value={this.state.password}
            onChange={this.handeChange}/>
             <input type="password" name="password_confirmation" value={this.state.password_confirmation}
            onChange={this.handeChange}/>
            <button type="submit">Register</button>
            </form>
            </>
        )
    }
}
