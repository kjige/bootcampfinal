// Include the Main React Dependencies
var React = require("react");
// import * as React from 'react';      ES6
// use to render DOM
var ReactDOM = require("react-dom");
// import * as ReactDom from 'react-dom';      ES6

import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { CreateProfile } from "./components/CreateProfile";
import { FreelancerSignUpForm } from "./components/children/FreelancerSignUpForm";
import { EmployerSignUpForm } from "./components/children/EmployerSignUpForm";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import * as axios from 'axios';

function requireAuth() {
  var userId = sessionStorage.getItem('userId');
  console.log('USERID', userId);
  if (!userId) {
    return (
        <Route>
            <Redirect to="/login"/>
        </Route>
    )

  }
}

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='home' component={Home} />
            <Route path='about' component={About} />
            
            <Route path='createprofile' component={CreateProfile}>
                <Route path='/freelancer' component={FreelancerSignUpForm} />
                <Route path='/employer' component={EmployerSignUpForm} />
                <IndexRoute component={FreelancerSignUpForm} />
            </Route>

            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />

            <IndexRoute component={Home} />
        </Route>

    </Router>
);

ReactDOM.render(router, document.getElementById("app"));
