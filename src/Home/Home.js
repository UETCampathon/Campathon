
import React, { Component } from 'react';
import './Home.css';
import Training from "./Training"
import DashBoard from "./DashBoard"
import {Redirect} from "react-router-dom"

class Home extends Component {
    render() {
        const {auth} = this.props;

        if(!auth){
            return <Redirect to="/Login"/>
        }

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
export default Home;

