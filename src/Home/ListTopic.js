import React from "react"
import Topics from "./Topics"
class ListTopic extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Topics src={"./images/animal.jpg"} topic={"Animals"}/>
                    <Topics src={"./images/fruint.jpg"} topic={"Fruits"}/>
                    <Topics src={"./images/schoolTool.jpg"} topic={"Tools"}/>
                    <Topics src={"./images/transpot.jpg"} topic={"Transportations"}/>
                </div>
            </div>

        )
    }
}

export default ListTopic