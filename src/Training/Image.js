import React from "react"

class Image extends React.Component {
    choose = () => {
        this.props.choose(this.props.name,this.props.answer);
    }
    render() {
        return (
           
                <div className="khoi1" onClick={this.choose}>
                    <div className="trang" />
                    <div className="front">
                        <img src={this.props.src} />
                    </div>
                    <div className="back">{this.props.name}</div>
                </div>
          
        )
    }
}

export default Image