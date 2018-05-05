import React from "react"
import './Login.css'
import {Redirect} from "react-router-dom"
import {login} from "../Service/Services"
class Login extends React.Component {
    state = {
        email: "" ,
        password: "",
        errorhandling: "",
        redirect: false,
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
        
    }
    handleSubmit = () =>{
        login({email:this.state.email,password:this.state.password}).then(res => {
            if(res.success){
                   this.setState({redirect: true})
                   sessionStorage.setItem("accessToken",res.data.accessToken)
            }
            else this.setState({errorhandling: res.message})
        })
    }
    redirect = () => {
        return <Redirect to="/" />
    }
    render() {
        const {auth} = this.props;

        if (auth) {
            return <Redirect to="/"/>;
        }

        return (
            <div className="loginPage">
                {(this.state.redirect) ? this.redirect() : null}
                <div className="contentLogin">
                    <h3>Log in to your Account</h3>
                    {this.state.errorhandling}
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <label htmlFor="inputEmail">Email address</label>
                                <input type="email" className="form-control" id="FormControlFullName"
                                       placeholder="Full Name"
                                       onChange={this.handleEmailChange}/>
                            </div>

                            <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input type="password" className="form-control" id="inputPassword1"
                                           placeholder="Password"
                                           onChange={this.handlePasswordChange}/>
                                </div>

                            </div>
                            <div className="loginButton">
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;