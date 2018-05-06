import React, { Component } from "react";
import { Link } from "react-router-dom";
import './StyleNav.css'


class NavBar extends Component {
    render() {
        if (!this.props.auth) {
            return (
                <div id="listNav">
                    <ul>
                        <li><a><Link to="/login">Login</Link></a></li>
                        <li><a><Link to="/register">Register</Link></a></li>
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div id="listNav">
                    <ul>
                        <li><a className="style"><Link to="/" >Home</Link></a></li>
                        <li><a className="style"><Link to="/library" >Library</Link></a></li>
                        <li><a className="style" onClick={this.props.logout}>Logout</a></li>
                    </ul>
                </div>
            )
        }
    }
}
export default NavBar;