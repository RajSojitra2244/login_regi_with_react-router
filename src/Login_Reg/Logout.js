import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)
    
        localStorage.removeItem("token")
    }
    
    render() {
        return (
            <div>
                <Link to="/"> Login again !!</Link>
                <h1> You have been Logout</h1>

            </div>
        )
    }
}
