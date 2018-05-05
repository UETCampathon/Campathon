import React, {Component} from 'react';
import './Training.css';
import {Link} from 'react-router-dom';
import {Redirect} from "react-router-dom"
import Image from "./Image"
import {addToLibrary} from "../Service/Services"
const Animals = ["Dog", "Fish", "Lions", "Rabbit", "Snake"];
const Fruits = ["Apples", "Bananas", "Grapes", "Lemons", "Orange"];
const Tools = ["Books", "Eraser", "Pencils", "Ruler", "Scissors"];
const Transportations = ["Airplane", "Bike", "Boat", "Car", "Metro"];

class Training extends Component {
    state = {
        progress: 0,
    }
    getName = (path) => {
        let first = 0;
        let last = 0;
        for (let count = 0, i = 0; count < 3 && i < path.length; i++) {
            if (count === 0 && path[i] === "/") {
                count++;
            }
            else if (count === 1 && path[i] === "/") {
                first = i;
                count++;
            }
            else if (count === 2 && path[i] === '.') {
                last = i;
                count++;
            }
        }
        return path.slice(first + 1, last);
    }
    randomImg = (topic) => {
        let res = [];
        console.log("some thing")
        if (topic === "Animals") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 5);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            res = arr.map(index => {
                return {img: "images/Animals/" + Animals[index] + ".png"}
            })
        }
        else if (topic === "Fruits") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 5);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            res = arr.map(index => {
                return {img: "images/Fruits/" + Fruits[index] + ".png"}
            })
        }

        else if (topic === "Tools") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 5);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            res = arr.map(index => {
                return {img: "images/Tools/" + Tools[index] + ".png"}
            })
        }

        else if (topic === "Transportations") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 5);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            res = arr.map(index => {
                return {img: "images/Transportations/" + Transportations[index] + ".png"}
            })
        }
        return res;
    }
    choose = (picked,answer) => {
        if(picked === this.getName(answer.img)) 
        {
            addToLibrary(picked).then(res=>this.setState({progress: this.state.progress+20}) );
        }
    }
    render() {

        const obj = this.randomImg(window.location.pathname.slice(10));
        const answer = obj[Math.floor(Math.random() * 4)];
        console.log(answer)
        if (!this.props.auth) return <Redirect to="/login"/>
        return (
            <div className="contariner">
                <div id="wrap1">
                    <div className="progress">
                        <div className="progress-bar">{this.state.progress}%</div>
                    </div>
                    <div className="row">
                        <Image src={obj[0].img} name={this.getName(obj[0].img)} choose={this.choose} answer={answer}/>
                        <Image src={obj[1].img} name={this.getName(obj[1].img)} choose={this.choose} answer={answer}/>
                        <Image src={obj[2].img} name={this.getName(obj[2].img)} choose={this.choose} answer={answer}/>
                        <Image src={obj[3].img} name={this.getName(obj[3].img)} choose={this.choose} answer={answer}/>
                    </div>
                    <div className="row3">
                        <div className="col-sm-6 push-sm-3">
                            <h3>{this.getName(answer.img)}</h3>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Training;
