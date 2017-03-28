import * as React from 'react';
import * as axios from 'axios';
// import { Button } from 'antd';
import { EachProjectOwner } from './grandchildren/EachProjectOwner';

class HomeRow3 extends React.Component {
  getOwners() {
    axios.get('/employers').then((res)=>{
      console.log(res.data);
      this.setState({
        docs: res.data
      });
    });
  }
  
  initializeState() {
    this.setState({
        docs:[]
    });
  }

  componentWillMount() {
    this.initializeState();
    this.getOwners();
  }
  
  
  render() {
    return (
    <div className="row">
              <div className="box">
                <div className="col-lg-12">
                    <hr />
                    <h2 className="intro-text text-center">Our 
                        <strong> Project Owners</strong>
                    </h2>
                    <hr />
                {this.state.docs.map((item,i)=>{
                  if (i<4){
                    return(
                        <EachProjectOwner
                        key={i} 
                        name={item.name}
                        field_needed={item.field_needed}
                        company={item.company}
                        description={item.description}
                        />
                    )
                  }
                })}
                  <br/>
                  <a href='#/dash/employerprofile'>More...</a>
                </div>
            </div>
          </div>
    );
  }
}

export { HomeRow3 };
