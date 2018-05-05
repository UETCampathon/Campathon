import React, { Component } from 'react';
import './App.css';
import Register from "./Components/Register/Register";
class App extends Component {
  render() {
    return (
      <div className="App">
          <nav className="navbar navbar-dark bg-inverse">
              <div className="container">
                  <a className="navbar-brand" href="index.html">Home</a>
                  <a className="navbar-brand" href="training.html">Training</a>
                  <a className="navbar-brand" href="create.html">Create</a>
              </div>
          </nav> {/* end menu */}
      </div>
    );
  }
}

export default App;
