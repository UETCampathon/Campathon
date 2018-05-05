
import React, {Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './StyleNav.css'



class Navbar extends Component {
    state = {
        login: false,
    }
    Logout = () => {
       
        this.setState({login:'false'});
    }
    render() {
        const register = <li><a><Link to="/register">Register</Link></a></li>;
        const login = <li><a><Link to="/login">Login</Link></a></li>;
    
        if (this.state.login) {
            return (
                <div id="listNav">
                    <ul>
                        <li><a className="style"><Link to="/" >Home</Link></a></li>
                        {login}
                        {register}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div id="listNav">
                    <ul>
                        <li><a className="style"><Link to="/" >Home</Link></a></li>
                        <li><a className="style" onClick={this.Logout}>Logout</a></li>
                    </ul>
                </div>
            )
        }

    }


}

export default Navbar;