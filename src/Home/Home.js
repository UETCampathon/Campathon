import React, { Component } from 'react';
import './Home.css';
import {Redirect} from "react-router-dom"
import DashBoard from "./DashBoard"
import ListTopic from './ListTopic';

class App extends Component {
    render() {
        
        if(!sessionStorage['accessToken']){
            return <Redirect to="/login" />
        }
        return (
            <div className="App">
                <div>
                    <DashBoard />
                    <ListTopic />
                </div>
            </div>
        );
    }
}
export default App;
