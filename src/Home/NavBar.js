import React from "react"
import {  Link } from 'react-router-dom'

class NavBar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-dark bg-inverse">
                <div className="container">
                    <Link to={"/"}>Home</Link>
                    <a className="navbar-brand" href="">Training</a>
                    <a className="navbar-brand" href="">Profile</a>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/register"}>Register</Link>
                </div>
            </nav>
        )
    }
}
export default NavBar;