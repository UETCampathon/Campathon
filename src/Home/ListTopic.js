import React from "react"
import Topics from "./Topics"
class ListTopic extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Topics src={"images/1.png"} topic={"Animals"}/>
                    <Topics src={"images/2.png"} topic={"Fruits"}/>
                    <Topics src={"images/1.png"} topic={"Tools"}/>
                    <Topics src={"images/2.png"} topic={"Transportations"}/>
                </div>
            </div>

        )
    }
}

export default ListTopic