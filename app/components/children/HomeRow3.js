import * as React from 'react';
import * as axios from 'axios';
// import { Button } from 'antd';
import { EachProjectOwner } from './grandchildren/EachProjectOwner';

class HomeRow3 extends React.Component {
  getOwners() {
    axios.get('/employers').then((res)=>{
      console.log(res.data);
      let dataReverse = res.data.reverse();
      this.setState({
        docs: dataReverse
      });
    });
  }
  
  initializeState() {
    this.setState({
        docs:[]
    }, () => this.getOwners());
  }

  componentWillMount() {
    this.initializeState();
  }
  
  render() {
    return (
    <div className="row">
        <div className="box homerow3">
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
                      image={item.image}
                      />
                  )
                }
              })}
          <div className="col-xs-3">
            <br/>
            <a href='#/dash/employerprofile' className='more'>More...</a>
          </div>
            </div>
          </div>
        </div>
    );
  }
}

export { HomeRow3 };
