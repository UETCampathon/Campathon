import React from "react"
import "./RowWord.css"


class RowWord extends React.Component {
    state= {
          url: "https://pbs.twimg.com/profile_images/639223147112173568/5IQ6tXP3.png",
    };

    render() {
        return (
            <div className="RowWord">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img alt="word"
                                 src={this.state.url}/>
                            <div className="wordLibrary"><h4>Locked</h4></div>
                        </div>
                        <div className="col-sm">
                            <img alt="word"
                                 src={this.state.url}/>
                            <div className="wordLibrary"><h4>Locked</h4></div>
                        </div>
                        <div className="col-sm">
                            <img alt="word"
                                 src={this.state.url}/>
                            <div className="wordLibrary"><h4>Locked</h4></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RowWord;