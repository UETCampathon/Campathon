import React, { Component } from 'react';
import './Register.css';


class Register extends Component {
    render() {
        return (
            <div className="RegisterPage">
                <div className='headerRegis'>
                    <h1>REGISTER PAGE</h1>
                </div>
                <form>

                    <div className="form-group">
                        <label htmlFor="FormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="FormControlEmail1"
                               placeholder="name@example.com"/>
                    </div>

                    <div>

                    </div>

                </form>
            </div>
        );
    }
}

export default Register;
