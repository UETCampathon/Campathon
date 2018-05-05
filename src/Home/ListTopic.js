import React from "react"
import Topics from "./Topics"
class ListTopic extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Topics src={"images/1.png"} topic={"1"}/>
                    <Topics src={"images/2.png"} topic={"2"}/>
                    <Topics src={"images/1.png"} topic={"3"}/>
                    <Topics src={"images/2.png"} topic={"4"}/>
                </div>
            </div>

        )
    }
}

export default ListTopic