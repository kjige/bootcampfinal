import * as React from 'react';

class EachConsultant extends React.Component {
 
  
  render() {
    return (
                <div className="col-lg-3">
                    
                    <img
                       width="200"
                       height="400"
                       className="img-responsive img-left img-circle border-img"
                       src="img/intro-pic.jpg"
                       alt="" />
                </div>
    );
  }
}

export { EachConsultant };
