import React, { Component } from 'react';
import './Home.css';
import Training from "./Training"
import NavBar from "./NavBar"
import DashBoard from "./DashBoard"
class App extends Component {
    render() {
       
        return (
            <div className="App">
                <div>
                    <DashBoard />
                    <Training />
                </div>
            </div>
        );
    }
}
export default App;
