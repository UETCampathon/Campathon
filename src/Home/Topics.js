import React from "react"
import {Redirect} from "react-router-dom"
class Topics extends React.Component {
    state = {
        redirect: false
    }
    change = () => {
        this.setState({redirect: true});
    }
    redirect = () => {
       return <Redirect to={'/training/' + this.props.topic} /> 
    }
    render() {
        return (
            <div className="col-sm-3">
                {(this.state.redirect) ? this.redirect() : null}
                <div className="card">

                    <img className="card-img-top img-fluid img_card" src="images/1.png" alt="Card  cap" />
                    <div className="card-block">
                        <h4 className="card-title" >Topic name</h4>
                        <a href className="btn btn-primary chuyen">Button</a>

                    <img className="card-img-top img-fluid img_card" src={this.props.src} alt="Card image cap" />
                    <div className="card-block" >
                        <h4 className="card-title" />
                        <a href className="btn btn-primary chuyen" onClick={this.change}>Button</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topics