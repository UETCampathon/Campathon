import React, {Component} from 'react';
import './Training.css';
import {Link} from 'react-router-dom';
class Training extends Component {
    render() {
        console.log("some thing")
        return (
            <div className="contariner">
                <div className="row">
                    <div className="col-sm-6 push-sm-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4 push-sm-1 khoi1">
                                    <div className="front">
                                        <img src="images/fruis.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                                <div className="col-sm-4 push-sm-2 khoi1">
                                    <div className="back">phần cứng</div>
                                    <div className="front">
                                        <img src="images/flashcard.png"/>
                                    </div>
                                </div>
                            </div>
                            {/* end row 1 */}
                            <div className="row row2">
                                <div className="col-sm-4 push-sm-1 khoi1">
                                    <div className="front">
                                        <img src="images/fruis.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                                <div className="col-sm-4 push-sm-2 khoi1">
                                    <div className="front">
                                        <img src="images/hardware.jpg"/>
                                    </div>
                                    <div className="back">phần cứng</div>
                                </div>
                            </div>
                            {/* end row 2 */}
                            <div className="row row3">
                                .
                                <div className="col-sm-11">
                                    <p>Từ tiếng anh</p>
                                </div>
                            </div>
                            {/* end row 2 */}
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Training;
