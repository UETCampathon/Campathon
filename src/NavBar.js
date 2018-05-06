import React, { Component } from "react";
import { Link } from "react-router-dom";
import './StyleNav.css'


class NavBar extends Component {
    render() {
        if (!this.props.auth) {
            return (
                <div id="listNav">
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div id="listNav">
                    <ul>
                        <li className="Home style"><Link to="/" >Home</Link></li>
                        <li className="style"><Link to="/library" >Library</Link></li>
                        <li className="Logout style" onClick={this.props.logout}>Logout</li>
                    </ul>
                </div>
            )
        }
    }
}
export default NavBar;