import React, { Component } from 'react';
import './Home.css';
import {  Link } from 'react-router-dom';

class App extends Component {
  render() {
      console.log("some thing")
    return (
      <div className="App">
          <div>
              <nav className="navbar navbar-dark bg-inverse">
                  <div className="container">
                      <Link to="/"><a className="navbar-brand" href="1.html">Home</a></Link>
                      <a className="navbar-brand" href="training.html">Training</a>
                      <a className="navbar-brand" href="#">Profile</a>
                      <Link to="/login"><a className="navbar-brand" href="1.html">Login</a></Link>
                      <Link to="/register"><a className="navbar-brand" href="1.html">Register</a></Link>
                  </div>
              </nav> 
              <div className="container mt-2">
                  <div className="row">
                      <div className="col-sm-8">
                          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                  <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                                  <li data-target="#carousel-example-generic" data-slide-to={0} />
                                  <li data-target="#carousel-example-generic" data-slide-to={0} />
                              </ol>
                              <div className="carousel-inner" role="listbox">
                                  <div className="carousel-item active">
                                      <img src="images/fruis.jpg" alt="First slide" className="img-thumbnail" />
                                  </div>
                                  <div className="carousel-item">
                                      <img src="images/body.jpg" alt="First slide" className="img-thumbnail" />
                                  </div>
                                  <div className="carousel-item">
                                      <img src="images/as.png" alt="First slide" className="img-thumbnail" />
                                  </div>
                              </div>
                              <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                                  <span className="icon-prev" aria-hidden="true" />
                                  <span className="sr-only">Previous</span>
                              </a>
                              <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                                  <span className="icon-next" aria-hidden="true" />
                                  <span className="sr-only">Next</span>
                              </a>
                          </div>
                      </div> {/* end carousel */}
                    
                  </div>
              </div> {/* end first container */}
              <div className="container">
                  <div className="row">
                      <div className="col-sm-3">
                          <div className="card">
                              <img className="card-img-top img-fluid img_card" src="images/1.png" alt="Card image cap" />
                              <div className="card-block">
                                  <h4 className="card-title" />
                                  <a href className="btn btn-primary chuyen">Button</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <div className="card">
                              <img className="card-img-top img-fluid img_card" src="images/2.png" alt="Card image cap" />
                              <div className="card-block">
                                  <h4 className="card-title" />
                                  <a href="training.html" className="btn btn-primary chuyen">Button</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <div className="card">
                              <img className="card-img-top img-fluid img_card" src="images/2.png" alt="Card image cap" />
                              <div className="card-block">
                                  <h4 className="card-title" />
                                  <a href="training.html" className="btn btn-primary chuyen">Button</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-sm-3">
                          <div className="card">
                              <img className="card-img-top img-fluid img_card" src="images/2.png" alt="Card image cap" />
                              <div className="card-block">
                                  <h4 className="card-title" />
                                  <a href="#" className="btn btn-primary chuyen">Button</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>{/*  end container 3 */}
          </div>

      </div>
    );
  }
}

export default App;
