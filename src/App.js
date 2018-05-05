
import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
           </BrowserRouter>
        )
    }
}

export default App