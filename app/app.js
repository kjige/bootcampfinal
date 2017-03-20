// Include the Main React Dependencies
var React = require("react");
// import * as React from 'react';      ES6
// use to render DOM
var ReactDOM = require("react-dom");
// import * as ReactDom from 'react-dom';      ES6

// var Routes = require("./config/routes.js");
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { SignUp } from "./components/SignUp";
import { FreelancerSignUpForm } from "./components/children/FreelancerSignUpForm";
import { EmployerSignUpForm } from "./components/children/EmployerSignUpForm";

const router = (
    <Router history={hashHistory}>
        <Route path='/'  component={Main}>
            <Route path='home' component={Home} />
            <Route path='about' component={About} />
            
            <Route path='signup' component={SignUp}>
                <Route path='/freelancer' component={FreelancerSignUpForm} />
                <Route path='/employer' component={EmployerSignUpForm} />
                <IndexRoute component={FreelancerSignUpForm} />
            </Route>
            {/*<Route path='home/new' component={CreatePost} />*/}
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain JavaScript
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(router, document.getElementById("app"));
