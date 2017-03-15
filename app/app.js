// Include the Main React Dependencies
var React = require("react");
// import * as React from 'react';      ES6
// use to render DOM
var ReactDOM = require("react-dom");
// import * as ReactDom from 'react-dom';      ES6

// var Routes = require("./config/routes.js");
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Main } from "./components/Main";
// var Routes = require("./config/routes.js");

const router = (
    <Router history={hashHistory}>
        <Route path='/'  component={Main}>
        </Route>
    </Router>
);

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain JavaScript
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(router, document.getElementById("app"));
