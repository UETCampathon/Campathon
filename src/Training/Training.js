import React, { Component } from 'react';
import './Training.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom"
import Image from "./Image"
class Training extends Component {
    render() {
        if (!this.props.auth) return <Redirect to="/login" />
        return (
            <div className="contariner">
                <div className="row">
                    <div className="col-sm-8 push-sm-2">
                        <div id="wrap1">
                            <div className="progress">
                                <div className="progress-bar">60%</div>
                            </div>
                            <div className="row">
                                <Image />
                                <Image />
                                <Image />
                                <Image />
                            </div>
                            {/* end row 3*/}
                            <div className="row3">
                                <div className="col-sm-6 push-sm-3">
                                    <h3>Tu tieng anh</h3>
                                </div>
                            </div>
                            {/* end row 23*/}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Training;
