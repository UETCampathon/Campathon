
import React from "react"
import Login from './Login/Login'
import Register from "./Register/Register"
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from "./Home/Home"
import NavBar from "./NavBar";
import Training from "./Training/Training"
import listReactFiles from 'list-react-files'
import Library from "./Library/Library";



class App extends React.Component {
    state = {
        login: false,
    }
    componentDidMount = () => {
        this.setState({ login: !!(sessionStorage['accessToken']) })
    }
    login = () => {
        this.setState({login: true})
    }
    logout = () => {
        console.log("logout");
        sessionStorage.removeItem("accessToken");
        this.setState({login: false});
    }
    render() {
        console.log("login", this.state.login)
        console.log("session")
        return (
            <BrowserRouter>
                <div>
                    <NavBar logout={this.logout} auth={this.state.login}/>
                    <Switch>
                        <Route exact path='/' component={() => <Home auth={this.state.login} />} />
                        <Route exact path='/login' component={() => <Login auth={this.state.login} login={this.login}/>} />
                        <Route exact path='/register' component={() => <Register auth={this.state.login} />} />
                        <Route exact path='/training/:id' component={() => <Training auth={this.state.login} />} />
                        <Route exact path='/library' component={() => <Library auth={this.state.login} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;