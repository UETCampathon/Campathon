import React from "react"
import Topics from "./Topics"
class Training extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Topics/>
                    <Topics/>
                    <Topics/>
                    <Topics/>
                </div>
            </div>

        )
    }
}

export default Training