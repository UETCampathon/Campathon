import React from 'react'
import "./Library.css"
import WordLibrary from "./WordLibrary";



class Library extends React.Component{

    render(){
        console.log(this.props.library)
        const map = this.props.library.map((data) => <WordLibrary word={data.title}/>)
        return(
            <div className="containerLibrary">
                <div className="title"><h4>Your Library</h4></div>
                <div className="wrapLibrary">
                   {map}
                </div>
            </div>


        )
    }

}

export default Library;