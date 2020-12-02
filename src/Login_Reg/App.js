import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom"; 
import Login from './Login'
 import Logout from './Logout'
import Admin from './Admin'

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/admin" component={Admin}/>
                        {/* <Route exact path="/login" component={Login}/> */}

                    </Switch>
                </Router>
            </div>
        )
    }
}
