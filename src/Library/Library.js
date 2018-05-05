import React from 'react'
import "./Library.css"
import WordLibrary from "./WordLibrary";


class Library extends React.Component{
    render(){
        return(
            <div className="containerLibrary">
                <div className="title"><h4>Your english library</h4></div>
                <div className="wrapLibrary">
                    <WordLibrary />
                </div>
            </div>


        )
    }

}

export default Library;