
var React = require("react");
import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import * as axios from 'axios';

class Main extends React.Component{
    
    render(){
        return(
            <div>
                <Header />
                {/*<div clasesName="main-content">*/}
                    {this.props.children}
                {/*</div>*/}
                <Footer />
            </div>

        );
    }
}

Main.contextTypes = {
  router: React.PropTypes.any
};

export {Main};  