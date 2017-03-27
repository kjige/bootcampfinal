import * as React from 'react';
// import { Button } from 'antd';

import { EachConsultant } from './grandchildren/EachConsultant';


class HomeRow2 extends React.Component {
 
  
  render() {
    return (
   <div className="row">
            <div className="box">
                <div className="col-lg-12">
                    <hr />
                    <h2 className="intro-text text-center">Our 
                        <strong> Consultants</strong>
                    </h2>
                    <hr />
                    <EachConsultant />
                    <EachConsultant />
                    <EachConsultant />
                    <EachConsultant />
                    <a href=''>  More... </a>
                    
                     </div>
            </div>
        </div>
    );
  }
}

export { HomeRow2 };
