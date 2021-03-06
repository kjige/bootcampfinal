import React from 'react';      
import ReactDOM from "react-dom";

import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import { Main } from "./components/Main";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { CreateProfile } from "./components/CreateProfile";
import { FreelancerSignUpForm } from "./components/children/FreelancerSignUpForm";
import { EmployerSignUpForm } from "./components/children/EmployerSignUpForm";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Contact } from "./components/Contact";
import { Dash } from "./components/Dash";
import { Forum } from "./components/Forum";
import { UserProfile } from "./components/UserProfile";
import { EmployerProfile } from "./components/EmployerProfile";
import { FreelancerProfile } from "./components/FreelancerProfile";
import { UserProfileConsultant } from "./components/UserProfileConsultant";


import * as axios from 'axios';

const router = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='home' component={Home} />
            <Route path='about' component={About} />
            <Route path='login' component={Login} />
            <Route path='register' component={Register} />
            <Route path='contact' component={Contact} />
            <IndexRoute component={Home} />
        </Route>

        <Route path='/dash' component={Dash} >
            <Route path='home' component={Home} />
            <Route path='forum' component={Forum} />
            <Route path='userprofile/:id' component={UserProfile} />
            <Route path='userprofileconsultant/:id' component={UserProfileConsultant} />
            <Route path='employerprofile' component={EmployerProfile} /> 
            <Route path='freelancerprofile' component={FreelancerProfile} />           
            <Route path='createprofile' component={CreateProfile}>
                <Route path='/freelancer' component={FreelancerSignUpForm} />
                <Route path='/employer' component={EmployerSignUpForm} />
                <IndexRoute component={FreelancerSignUpForm} />
            </Route>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

ReactDOM.render(router, document.getElementById("app"));
