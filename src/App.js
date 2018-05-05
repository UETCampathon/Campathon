
import React from "react"
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import { BrowserRouter ,Route ,Switch} from 'react-router-dom';
import Home from "./Home/Home"


class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                     <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                     </Switch>
           </BrowserRouter>
        )
    }
}

export default App