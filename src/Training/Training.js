import React, { Component } from 'react';
import './Training.css';
import { Link } from 'react-router-dom';
import { Redirect } from "react-router-dom"
import Image from "./Image"

const Animals = ["Dog", "Fish", "Lions", "Rabbit", "Snake"];
const Fruits = ["Apples", "Bananas", "Grapes", "Lemons", "Orange"];
const Tools = ["Books", "Eraser", "Pencils", "Ruler", "Scissors"];
const Transportations = ["Airplane", "Bike", "Boat", "Car", "Metro"];

class Training extends Component {
    state = {
        img1: "",
        img2: "",
        img3: "",
        img4: "",

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
            else if(count===2 && path[i]==='.'){
                last=i;
                count++;
            }
        }
        return path.slice(first + 1, last);
    }
    randomImg = (topic) => {
        if (topic === "Animals") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 4);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            this.setState({
                img1: "images/Animals/" + Animals[arr[0]] + ".png",
                img2: "images/Animals/" + Animals[arr[1]] + ".png",
                img3: "images/Animals/" + Animals[arr[2]] + ".png",
                img4: "images/Animals/" + Animals[arr[3]] + ".png",
            })
        }
        else if (topic === "Fruits") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 4);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            this.setState({
                img1: "images/Fruits/" + Fruits[arr[0]] + ".png",
                img2: "images/Fruits/" + Fruits[arr[1]] + ".png",
                img3: "images/Fruits/" + Fruits[arr[2]] + ".png",
                img4: "images/Fruits/" + Fruits[arr[3]] + ".png",
            })
        }

        else if (topic === "Tools") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 4);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            this.setState({
                img1: "images/Tools/" + Tools[arr[0]] + ".png",
                img2: "images/Tools/" + Tools[arr[1]] + ".png",
                img3: "images/Tools/" + Tools[arr[2]] + ".png",
                img4: "images/Tools/" + Tools[arr[3]] + ".png",
            })
        }

        else if (topic === "Transportations") {
            let count = 0;
            const arr = [];
            while (count < 4) {
                let temp = Math.floor(Math.random() * 4);
                if (arr.indexOf(temp) === -1) {
                    arr.push(temp);
                    count++;
                }
            }
            this.setState({
                img1: "images/Transportations/" + Transportations[arr[0]] + ".png",
                img2: "images/Transportations/" + Transportations[arr[1]] + ".png",
                img3: "images/Transportations/" + Transportations[arr[2]] + ".png",
                img4: "images/Transportations/" + Transportations[arr[3]] + ".png",
            })
        }


    }
    componentDidMount = () => {
        this.randomImg(window.location.pathname.slice(10))
    }

    render() {

        if (!this.props.auth) return <Redirect to="/login" />
        return (
            <div className="contariner">
                <div id="wrap1">
                    <div className="progress">
                        <div className="progress-bar">60%</div>
                    </div>
                    <div className="row">
                        <Image src={this.state.img1} name={this.getName(this.state.img1)} />
                        <Image src={this.state.img2} name={this.getName(this.state.img2)} />
                        <Image src={this.state.img3} name={this.getName(this.state.img3)} />
                        <Image src={this.state.img4} name={this.getName(this.state.img4)} />
                    </div>
                    {/* end row 3*/}
                    <div className="row3">
                        <div className="col-sm-6 push-sm-3">
                            <h3>Tu tieng anh</h3>
                        </div>
                    </div>
                    {/* end row 23*/}
                </div>
            </div>


        );
    }
}

export default Training;
