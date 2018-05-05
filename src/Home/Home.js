import React, { Component } from 'react';
import './Home.css';
import Training from "./Training"
import NavBar from "./NavBar"
import DashBoard from "./DashBoard"
class App extends Component {
    render() {
        console.log("some thing")
        return (
            <div className="App">
                <div>
                    <NavBar />
                    <DashBoard />
                    <Training />
                </div>
            </div>
        );
    }
}

export default App;
