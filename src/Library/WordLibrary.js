import React from 'react'
import "./Library.css"
class WordLibrary extends React.Component{
    render(){
        return(
            <div className="bo">
                <div className="trai">
                    <img src="images/cat.jpg" />
                </div>
                <div className="phai">
                    <p>Tieng anh</p>
                    <p>Tieng viet</p>
                </div>
            </div>

        )
    }

}
export default WordLibrary;