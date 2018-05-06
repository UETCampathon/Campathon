import React from 'react'
import "./Library.css"

const Animals = ["Dog", "Fish", "Lions", "Rabbit", "Snake"];
const Fruits = ["Apples", "Bananas", "Grapes", "Lemons", "Orange"];
const Tools = ["Books", "Eraser", "Pencils", "Ruler", "Scissors"];
const Transportations = ["Airplane", "Bike", "Boat", "Car", "Metro"];

class WordLibrary extends React.Component{
    handlePath = () =>{
        if(Animals.indexOf(this.props.word) !== -1) return "images/Animals/" +this.props.word +".png";
        if(Fruits.indexOf(this.props.word) !== -1) return "images/Fruits/" +this.props.word +".png";
        if(Tools.indexOf(this.props.word) !== -1) return "images/Tools/" +this.props.word +".png";
        if(Transportations.indexOf(this.props.word) !== -1) return "images/Transportations/" +this.props.word +".png";
    }

    render(){
        return(
            <div className="bo">
                <div className="trai">
                    <img src={this.handlePath()} />
                </div>
                <div className="phai">
                    <p>{this.props.word}</p>
                    <p>Tieng viet</p>
                </div>
            </div>

        )
    }

}
export default WordLibrary;