import * as React from 'react';
// import { Button } from 'antd';

class HomeRow1 extends React.Component {

  
  render() {
    return (
    <div className="row">
              <div className="box">
                  <div className="col-lg-12 text-center">
                    <div id="carousel-example-generic" className="carousel slide">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators hidden-xs">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img className="img-responsive img-full" src="img/slide-1.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img className="img-responsive img-full" src="img/slide-2.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img className="img-responsive img-full" src="img/slide-3.jpg" alt="" />
                            </div>
                        </div>

                        {/*<!-- Controls -->*/}
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="icon-prev"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="icon-next"></span>
                        </a>
                    </div>
                    <h2 className="brand-before">
                        <small>Welcome to</small>
                    </h2>
                    <h1 className="brand-name">WorkIt</h1>
                    <hr className="tagline-divider" />
                    {/*<h2>
                        <small>By
                            <strong>Start Bootstrap</strong>
                        </small>
                    </h2>*/}
                </div>
              </div>
          </div>
    );
  }
}

export { HomeRow1 };
