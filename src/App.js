
import React from "react"
import Login from './Login/Login'
import Register from "./Register/Register"

import {Route, Switch } from 'react-router-dom';
import Home from "./Home/Home"
import Navbar from "./NavBar";
import Training from "./Training/Training"


class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/training' component={Training} />
                </Switch>
            </div>
        )
    }
}

export default App