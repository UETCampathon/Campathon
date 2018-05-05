import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <nav className="navbar navbar-dark bg-inverse">
                  <div className="container">
                      <a className="navbar-brand" href="1.html">Home</a>
                      <a className="navbar-brand" href="training.html">Training</a>
                      <a className="navbar-brand" href="create.html">Create</a>
                  </div>
              </nav> {/* end menu */}
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
                      <div className="col-sm-4 text-justify text-warning">
                          <h3>Well come my app . You can Click the button below to view instruction ! thank you :))</h3>
                          <button type="button" className="btn btn-primary mt-2 text-justify">Flashxu</button>
                      </div>
                  </div>
              </div> {/* end first container */}
              <div className="container">
                  <div className="row">
                      <div className="col-sm-12">
                          <hr />
                          <div className="alert alert-info text-xs-center">anh em mình là cái gì đây anh em mình là củ khoai tây ! ahihi</div>
                      </div>
                  </div>
              </div> {/* end secon container */}
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
