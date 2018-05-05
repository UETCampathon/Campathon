import React from "react"
import './Login.css'

class Login extends React.Component {
    render() {
        return (
            <div className="loginPage">

                <div className="contentLogin">
                    <h3>Log in to your Account</h3>
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <input type="email" className="form-control" id="FormControlFullName"
                                       placeholder="Full Name"/>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword1"
                                           placeholder="Password"/>
                                </div>

                            </div>
                            <div className="loginButton">
                                <button type="button" className="btn btn-primary">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;