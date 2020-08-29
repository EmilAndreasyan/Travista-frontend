import React, { Component } from 'react';
//import axios from 'axios';

export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handeChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = event => {
        const {email, password} = this.state
        event.preventDefault();
        fetch("http://localhost:3000/api/v1/login", {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email, password})
        })
        .then(resp => resp.json())
        .then(data => this.props.handleAuth(data))
        .catch(err => console.log(err))
    }

    // handleSubmit = event => {
    //     event.preventDefault()
    //     const {email, password} = this.state;
    // axios.post("http://localhost:3000/api/v1/sessions", {
    //     user: { email, password }
    // }, {withCredentials: true})
    // .then(resp => {
    //     if (resp.data.logged_in){
    //     this.props.handleAuth(resp.data)
    // }
    // })
    // }

    render() {
        return (
            <>
           <form onSubmit={this.handleSubmit} className="form-control">
            <input type="email" name="email" value={this.state.email} onChange={this.handeChange} required/>
            <input type="password" name="password" value={this.state.password} onChange={this.handeChange} required/>
            <button type="submit">Login</button>
            </form>
            </>
        )
    }
}

