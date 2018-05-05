
import React from "react"
import Login from './Login/Login'
import Register from "./Register/Register"
import {Route, Switch } from 'react-router-dom';
import Home from "./Home/Home"
import Navbar from "./NavBar";
import Training from "./Training/Training";


const Animals = [
    "images/Animals/Dog.png","images/Animals/Fish.png","images/Animals/Lions.png","images/Animals/Rabbit.png","images/Animals/Snake.png"

];

const Fruits = [
  "images/Fruits/Apple.png","images/Fruits/Banana.png","images/Fruits/Grape.png","images/Fruits/Lemon.png","images/Fruits/Orange.png"
];

const Tools = [
    "images/Tools/Book.png","images/Tools/drag.png","images/Tools/eraser.png","images/Tools/Pencils.png","images/Tools/Ruler.png"
];

const Transportations = [
  "images/Transportations/Bike.png","images/Transportations/boat.jpg","images/Transportations/Car.png","images/Transportations/Metro.jpg","images/Transportations/Planes.png"
];


class App extends React.Component {
    state = {
        login: false,
    }
    componentDidMount = () => {
        this.setState({login: !!(sessionStorage['accesstoken'])})
    }
    render() {
        
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={() => {Home} } />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/training/:id' component={Training} />
                </Switch>
            </div>
        )
    }


}

export default App;