
import React from "react"
import Login from './Login/Login'
import Register from "./Register/Register"

import {Route, Switch } from 'react-router-dom';
import Home from "./Home/Home"
import Navbar from "./NavBar";
import Training from "./Training/Training"
const Animals = [
    "images/body.jpg",

]



class App extends React.Component {

    state = {
        auth: false
    };
    componentDidMount(){
        const auth = this.state;

        this.setState({
            auth: auth
        });
    }
    render() {
        const {auth}=this.state;
        return (
            <div>
                <Navbar onAuth={this._onChangeAuth.bind(this)} auth={auth}/>

                <Switch>
                    <Route exact path='/' component={() => <Home auth={auth}/>} />
                    <Route exact path='/login' component={() => <Login onAuth={this._onChangeAuth.bind(this)} auth={auth}/>} />
                    <Route exact path='/register' component={() => <Register auth={auth}/>} />
                    <Route exact path='/training' component={() => <Training auth={auth}/>} />
                </Switch>
            </div>
        )
    }

    _onChangeAuth(auth) {
        this.setState({
            auth: auth
        });
    }

}

export default App;