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

            case "Fish":
                return "Con Cá";

            case "Lions":
                return "Con Sư Tử";

            case "Rabbit":
                return "Con Cá";

            case "Snake":
                return "Con Rắn";

            case "Apples":
                return "Quả Táo";

            case "Bananas":
                return "Quả Chuối";

            case "Grapes":
                return "Chùm Nho";

            case "Orange":
                return "Quả Cam";

            case "Lemons":
                return "Quả Chanh";

            case "Books":
                return "Quyển Sách";

            case "Eraser":
                return "Cục Tẩy";

            case "Pencils":
                return "Bút Chì";

            case "Ruler":
                return "Cái Thước Kẻ";

            case "Scissors":
                return "Cái Kéo";

            case "Airplane":
                return "Máy bay";

            case "Bike":
                return "Xe đạp"

            case "Boat":
                return "Tàu Thủy";

            case "Car":
                return "Ô tô"

            case "Metro":
                return "Tàu Hỏa"
            default:
                return ""
        }
    }
    render() {

        return (
            <div className="bo">
                <div className="trai">
                    <img src={this.handlePath()} alt="Unable to Load" />
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