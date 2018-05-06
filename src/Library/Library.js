import React from 'react'
import "./Library.css"
import WordLibrary from "./WordLibrary";
import {Redirect} from "react-router-dom"
import { getList } from '../Service/Services';



class Library extends React.Component{
    state = {
        library: [],
    }
    componentDidMount = () => {
        getList().then(res => {
            this.setState({ library: res.data})
        })
    }
    render(){
        
        if (!this.props.auth) return <Redirect to="/login" />
        const map = (this.state.library) ? this.state.library.map((data) => <WordLibrary word={data.title}/>) : null;
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