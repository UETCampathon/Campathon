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
            <div className="col-sm-3 col-xs-6">
                {(this.state.redirect) ? this.redirect() : null}
                <div className="card">
                    <img className="card-img-top img-fluid img_card" src={this.props.src} alt="Card cap" />
                    <div className="card-block" >
                        <a href="def" className="btn btn-primary chuyen" onClick={this.change}>Button</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topics