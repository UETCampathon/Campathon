import React, { Component } from 'react';
import './Home.css';
import { Redirect } from "react-router-dom"
import DashBoard from "./DashBoard"
import ListTopic from './ListTopic';

class Home extends Component {
    render() {
        console.log("Home",this.props.auth)
        if (!this.props.auth) {
            return <Redirect to="/login" />
        }
        else {
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
}
export default Home;
