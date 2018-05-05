import React from "react"

class Topics extends React.Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img className="card-img-top img-fluid img_card" src="images/1.png" alt="Card  cap" />
                    <div className="card-block">
                        <h4 className="card-title" >Topic name</h4>
                        <a href className="btn btn-primary chuyen">Button</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Topics