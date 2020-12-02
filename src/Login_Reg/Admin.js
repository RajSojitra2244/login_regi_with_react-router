import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
export default class Admin extends Component {
    constructor(props) {
        super(props)

        const token = localStorage.getItem("token")     
           
        let loggin = true
        if(token == null){
            loggin = false
        }
        this.state = {
            loggin
        }
    }
    
    render() {
        if(this.state.loggin === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <Link to="/logout"> Logout</Link>
            </div>
        )
    }
}
