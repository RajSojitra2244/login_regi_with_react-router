import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

export default class Login extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")       
         
        let loggin = true
        if(token == null){
            loggin = false
        }

        this.state = {
            username: '',
            password: '',
            loggin

        }
    }
    UsernameHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    SubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.username === "admin" && this.state.password === "123") {
            localStorage.setItem("token","abcd")
            this.setState({
                loggin: true
            })
        }
    }
    render() {
        if (this.state.loggin) {
            return <Redirect to="/admin" />
        }
        return (
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <h1>Login   </h1>
                    <input placeholder="Enter UserName" name="username" onChange={this.UsernameHandler} value={this.state.username} /><br />
                    <input placeholder="Enter Password" name="password" onChange={this.UsernameHandler} value={this.state.password} /><br />
                    <button type="submit">Login</button>

                </form>
            </div>
        )
    }
}
