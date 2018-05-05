import React from "react"
class DashBoard extends React.Component{
    render(){
        return(
            <div className="container mt-2">
                  <div className="row">
                      <div className="col-sm-8">
                          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                              <ol className="carousel-indicators">
                                  <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
                                  <li data-target="#carousel-example-generic" data-slide-to={1} />
                                  <li data-target="#carousel-example-generic" data-slide-to={2} />
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
                      </div> 
                    
                  </div>
              </div>
        )
    }
}

export default DashBoard