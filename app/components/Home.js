import * as React from 'react';
import * as axios from 'axios';
import {EachEmployer} from './children/grandchildren/EachEmployer';

import { HomeRow1 } from './children/HomeRow1';
import { HomeRow2 } from './children/HomeRow2';
import { HomeRow3 } from './children/HomeRow3';


class Home extends React.Component {
  
  componentWillMount(){
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    console.log('USERID', userId);
    this.checkId(userId);
    this.getJobs();
  }

  initializeState() {
    this.setState({
      docs: []
    })
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
        if (res) this.context.router.push('/dash/home');
      })
    }
  }

  getJobs() {
    axios.get('/employers').then((res)=> {
      console.log('EMPS', res);
      this.setState({
        docs: res.data
      });
    });
  }

  render() {

    return (
      <div className='container'>

        <div className="row">
          <div className="box">
            {this.state.docs.map((item,i)=>{
              console.log(item);
              return (
                <div key={i} className='col-xs-3'>
                  <EachEmployer 
                  name={item.name} 
                  company={item.company} 
                  fieldNeeded={item.field_needed} 
                  description={item.description}
                  image={item.image}
                  />
                </div>
              )
            })}
              </div>
          </div>

          <HomeRow1 />
          <HomeRow2 />
          <HomeRow3 />

      </div>
    );

  }
}

// Home.propTypes = {
//   isAuthenticated: React.PropTypes.func,
//   checkId: React.PropTypes.func
// };

Home.contextTypes = {
  router: React.PropTypes.any
};

export { Home };