import React, {Component} from 'react';
import './Training.css';
import {Link} from 'react-router-dom';

class Training extends Component {
    render() {
        console.log("some thing")
        return (
            <div className="contariner">
                <div className="row">
                    <div className="col-sm-8 push-sm-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-sx-10 push-sm-2 khoi1">
                                    <div className="trang"/>
                                    <div className="front">
                                        <img src="images/hardware.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                                <div className="col-sm-3 col-md-3 col-sx-10 push-sm-3 khoi1">
                                    <div className="trang"/>
                                    <div className="front">
                                        <img src="images/flashcard.png"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                            </div>
                            {/* end row 1 */}
                            <div className="row row2">
                                <div className="col-sm-3 col-md-3 col-sx-10 push-sm-2 khoi1">
                                    <div className="trang"/>
                                    <div className="front">
                                        <img src="images/fruis.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                                <div className="col-sm-3 col-md-3 col-sx-10 push-sm-3 khoi1">
                                    <div className="trang"/>
                                    <div className="front">
                                        <img src="images/hardware.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                            </div>
                            {/* end row 3*/}
                            <div className="row3">
                                <div className="col-sm-5 push-sm-3">
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
