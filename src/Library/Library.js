import React from 'react'
import "./Library.css"
import RowWord from "./RowWord/RowWord";


class Library extends React.Component{
    render(){
        return(


            <div className="library">
                <div className="headerLibrary">
                    <h1>Your English Library</h1>
                </div>
                <div>
                    <RowWord />
                    <RowWord />
                </div>
            </div>

        )
    }

}

export default Library;