import React, { Component } from 'react';
import './Register.css';
import { register } from '../Service/Services'
import {Redirect} from "react-router-dom"

class Register extends Component {
    state = {
        FullName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        ErrorHandling: "",
        Redirect: false,
    }
    handleSubmit = () => {
        register({ email: this.state.Email, password: this.state.Password, name: this.state.FullName }).then(res => {
            if (res.success) {
                this.setState({ErrorHandling: "You've successfully created an account"})
                setTimeout(()=>{
                    this.setState({Redirect: true})

                } ,1000 )
            }
            else this.setState({ErrorHandling: res.message})

        });

    }
    redirect = () => {
        return <Redirect to="/login" />
    }
    handleNameChange = (e) => {
        this.setState({ FullName: e.target.value });
    }
    handleEmailChange = (e) => {
        this.setState({ Email: e.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ Password: e.target.value });
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({ ConfirmPassword: e.target.value });
    }

    render() {

        return (
            <div className="RegisterPage">
                {(this.state.Redirect) ? this.redirect() : null}
                
                <div className="contentRegister">
                    <h1>Create your Account</h1>
                    <span className="messageRegis">{this.state.ErrorHandling}</span>
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <label htmlFor="InputFullname">FullName</label>
                                <input type="text" className="form-control" id="FormControlFullName"
                                    placeholder="Full Name" onChange={this.handleNameChange}
                                    value={this.state.FullName} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputEmail">Your Email</label>
                                <input type="email" className="form-control" id="inputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email"
                                    onChange={this.handleEmailChange}
                                    value={this.state.Email} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputPassWord">Password</label>
                                <input type="password" className="form-control" id="inputPassword"
                                    placeholder="Password" onChange={this.handlePasswordChange}
                                    value={this.state.Password} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="InputConfirmPassWord">Confirm Password</label>
                                <input type="password" className="form-control" id="inputConfirmPassword"
                                    placeholder="Confirm Password" onChange={this.handleConfirmPasswordChange}
                                    value={this.state.ConfirmPassword} />
                            </div>

                            <div className="regisButton">
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
