import React, {Component} from 'react';
import './Register.css';


class Register extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <div className='headerRegis'>
                    <h1>REGISTER</h1>
                </div>
                <div className="contentRegister">
                    <h3>Create your Account</h3>
                    <form>
                        <div className="form-group">

                            <div className="form-group">
                                <input type="email" className="form-control" id="FormControlFullName"
                                       placeholder="Full Name"/>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" id="inputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"/>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
