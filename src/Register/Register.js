import React, {Component} from 'react';
import './Register.css';


class Register extends Component {
    render() {
        return (
            <div className="RegisterPage">

                <div className="contentRegister">
                    <h1>Create your Account</h1>
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <label htmlFor="InputFullname">FullName</label>
                                <input type="text" className="form-control" id="FormControlFullName"
                                       placeholder="Full Name"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Your Email</label>
                                <input type="email" className="form-control" id="inputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputPassWord">Password</label>
                                <input type="password" className="form-control" id="inputPassword"
                                       placeholder="Password"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputConfirmPassWord">Confirm Password</label>
                                <input type="password" className="form-control" id="inputConfirmPassword"
                                       placeholder="Confirm Password"/>
                            </div>
                            
                            <div className="regisButton">
                                <button type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
