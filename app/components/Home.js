import * as React from 'react';
import * as axios from 'axios';
import {EachEmployer} from './children/grandchildren/EachEmployer';

import { HomeRow1 } from './children/HomeRow1';
import { HomeRow2 } from './children/HomeRow2';
import { HomeRow3 } from './children/HomeRow3';


class Home extends React.Component {
  
  initializeState() {
    this.setState({
      docs: [] 
    });
  }

  componentWillMount(){
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    console.log('USERID', userId);
    this.checkId(userId);
    // this.getJobs();
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

  // getJobs() {
  //   axios.get('/employers').then((res)=> {
  //     console.log('EMPS', res);
  //     this.setState({
  //       docs: res.data
  //     });
  //   });
  // }

  render() {

    return (
      <div className='container'>
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