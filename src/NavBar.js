import React, {Component} from "react";
import {Link} from "react-router-dom";
import './StyleNav.css'


class Navbar extends Component {
    render(){
        const {auth} = this.props;

        const register = auth ? <li><a><Link to="/register">Register</Link></a></li> : null;
        const login = auth ? <li><a><Link to="/login">Login</Link></a></li> : null;
        const training = !auth ? <li><a><Link to="/training">Training</Link></a></li> : null;
        const logout = !auth ? <li><a onClick={this._handleLogout(this)}><Link to="/logout">Logout</Link></a></li> : null;
        return(
            <div id="listNav">
                <ul>
                    <li><a className="style"><Link to="/" >Home</Link></a></li>

                    {login}
                    {register}
                    {training}
                    {logout}
                </ul>
            </div>
        );
    }

    _handleLogout() {
        this.props.onAuth(false);

    }

}
export default Navbar;