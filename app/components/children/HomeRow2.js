import * as React from 'react';
import * as axios from 'axios';
// import { Button } from 'antd';

import { EachConsultant } from './grandchildren/EachConsultant';

class HomeRow2 extends React.Component {
  getConsultants() {
    axios.get('/freelancers').then((res)=>{
      console.log(res.data);
      this.setState({
        docs: res.data
      });
    });
  }
  
  initializeState() {
    this.setState({
        docs:[]
    }, () => this.getConsultants());
  }

  componentWillMount() {
    this.initializeState();
  }
  
  render() {
    return (
      <div className="row">
        <div className="box homerow2">
        <div className="col-lg-12 center">
            <hr />
            <h2 className="intro-text text-center">Our 
                <strong> Consultants</strong>
            </h2>
            <hr />
            {this.state.docs.map((item,i)=>{
                if (i<4){
                    return(
                        <EachConsultant
                        key={i} 
                        name={item.name}
                        field={item.field}
                        experience={item.experience}
                        image={item.image}
                        />
                    )
                }
            })}
      <div className="col-xs-3">

      <a href='#/dash/freelancerprofile'>More... </a>
      </div>
      </div>

    </div>    
    </div>
    );
  }
}

export { HomeRow2 };
