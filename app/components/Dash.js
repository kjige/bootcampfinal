import React from 'react';
import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import { Footer } from "./Footer";
import { Header2 } from "./Header2";
import * as axios from 'axios';

class Dash extends React.Component{
 
  componentWillMount(){
    var userId = sessionStorage.getItem('userId');
    // console.log('USERID', userId);
    this.checkId(userId);
    this.initializeState();
  }
  initializeState() {
    this.setState({
      username: ''
    })
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
        var username = res.data.username;
        console.log(username);
        this.setState({
        username: res.data.username
      });
        if (!res) this.context.router.push('/login');
      })
    }
  }

  // checkId(userId) {
  //   if (userId) {
  //     axios.post('findId', {'userId': userId}).then((res)=>{
  //       if (!res) this.context.router.push('/login');
  //     });
  //   }
  // }

  render(){
    return(
      <div>
        <Header2 username={this.state.username} />
        {/*<div clasesName="main-content">*/}
          {this.props.children}
        {/*</div>*/}
        <Footer />
      </div>

        );
    }
}

Dash.contextTypes = {
  router: React.PropTypes.any
};

export {Dash};  