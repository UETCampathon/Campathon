import React from "react"
import Topics from "./Topics"
class ListTopic extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Topics src={"https://thumb9.shutterstock.com/display_pic_with_logo/534799/727135948/stock-vector-banner-with-cute-winter-animals-with-presents-and-scarfs-merry-christmas-and-happy-new-year-727135948.jpg"} topic={"Animals"}/>
                    <Topics src={"images/2.png"} topic={"Fruits"}/>
                    <Topics src={"https://thumb7.shutterstock.com/display_pic_with_logo/1855049/363604304/stock-photo-fountain-writing-pen-isolated-on-white-background-363604304.jpg"} topic={"Tools"}/>
                    <Topics src={"https://thumb7.shutterstock.com/display_pic_with_logo/2413226/530792194/stock-photo-logistics-and-transportation-of-container-cargo-ship-and-cargo-plane-with-working-crane-bridge-in-530792194.jpg"} topic={"Transportations"}/>
                </div>
            </div>

        )
    }
}

export default ListTopic