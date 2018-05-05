
import React from "react"
import { Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Home/Home"
import Login from "./Login/Login"
import Register from "./Register/Register"
class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </Router>
        )
    }
}

export default App