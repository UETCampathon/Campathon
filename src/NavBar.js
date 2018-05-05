import React, {Component} from "react";
import {Link} from "react-router-dom";
import './StyleNav.css'


class Navbar extends Component {
    render(){
        const register = <li><a><Link to="/register">Register</Link></a></li>;
        const login = <li><a><Link to="/login">Login</Link></a></li>;
        const training = <li><a><Link to="/training">Training</Link></a></li>;
        return(
            <div id="listNav">
                <ul>
                    <li><a className="style"><Link to="/" >Home</Link></a></li>
                    {training}
                    {login}
                    {register}
                </ul>
            </div>
        );
    }
}
export default Navbar;