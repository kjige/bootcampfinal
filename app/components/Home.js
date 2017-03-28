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
    var userId = sessionStorage.getItem('userId');
    console.log('USERID', userId);
    this.checkId(userId);
    // this.getJobs();
  }

// initializeState() {
//     this.setState({
//       username: ''
//     })
//   }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
      //   var username = res.data.username;
      //   console.log(username);
      //   this.setState({
      //   username: res.data.username
      // });
        if (res) this.context.router.push('/dash/home');
      })
    }
  }

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

Home.contextTypes = {
  router: React.PropTypes.any
};

export { Home };