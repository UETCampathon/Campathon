import React from 'react'
import "./Library.css"


const Animals = ["Dog", "Fish", "Lions", "Rabbit", "Snake"];
const Fruits = ["Apples", "Bananas", "Grapes", "Lemons", "Orange"];
const Tools = ["Books", "Eraser", "Pencils", "Ruler", "Scissors"];
const Transportations = ["Airplane", "Bike", "Boat", "Car", "Metro"];

class WordLibrary extends React.Component {
    handlePath = () => {
        if (Animals.indexOf(this.props.word) !== -1) return "images/Animals/" + this.props.word + ".png";
        if (Fruits.indexOf(this.props.word) !== -1) return "images/Fruits/" + this.props.word + ".png";
        if (Tools.indexOf(this.props.word) !== -1) return "images/Tools/" + this.props.word + ".png";
        if (Transportations.indexOf(this.props.word) !== -1) return "images/Transportations/" + this.props.word + ".png";
    }
    translate = (word) => {
        switch (word) {
            case "Dog":
                return "Con Chó";
                break;
            case "Fish":
                return "Con Cá";
                break;
            case "Lions":
                return "Con Sư Tử";
                break;
            case "Fish":
                return "Con Cá";
                break;
            case "Snake":
                return "Con Rắn";
                break;
            case "Apples":
                return "Quả Táo";
                break;
            case "Bananas":
                return "Quả Chuối";
                break;
            case "Grapes":
                return "Chùm Nho";
                break;
            case "Orange":
                return "Quả Cam";
                break;
            case "Lemons":
                return "Quả Chanh";
                break;
            case "Books":
                return "Quyển Sách";
                break;
            case "Eraser":
                return "Cục Tẩy";
                break;
            case "Pencils":
                return "Bút Chì";
                break;
            case "Ruler":
                return "Cái Thước Kẻ";
                break;
            case "Scissors":
                return "Cái Kéo";
                break;
            case "Airplane":
                return "Máy bay";
                break;
            case "Bike":
                return "Xe đạp"
                break;
            case "Boat":
                return "Tàu Thủy";
                break;
            case "Car":
                return "Ô tô"
                break;
            case "Metro":
                return "Tàu Hỏa"
                break;
        }
    }
    render() {

        return (
            <div className="bo">
                <div className="trai">
                    <img src={this.handlePath()} />
                </div>
                <div className="phai">
                    <p>{this.props.word}</p>
                    <p>{this.translate(this.props.word)}</p>
                </div>
            </div>

        )
    }

}
export default WordLibrary;