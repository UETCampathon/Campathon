import React from "react"

class Image extends React.Component {
    render() {
        return (
            <div className="col-sm-3 col-md-3 col-sx-10 push-sm-2 khoi1">
                <div className="trang" />
                <div className="front">
                    <img src="images/hardware.jpg" />
                </div>
                <div className="back">phần cứng</div>
            </div>
        )
    }
}

export default Image