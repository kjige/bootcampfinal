// Requiring react npm Package.
var React = require("react");
import { Router, Route, IndexRoute, hashHistory, Redirect } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import * as axios from 'axios';

// Create a new class and assign it in a variable Main.
class Main extends React.Component{
    // componentWillMount(){
    //     var userId = sessionStorage.getItem('userId');
    //     console.log('USERID', userId);
    //     this.checkId(userId);
    // }

    // checkId(userId) {
    //     if (userId) {
    //         axios.post('findId', {'userId': userId}).then((res)=>{
    //             if (res) this.context.router.push('/dash');
    //         });
    //     }
    // }

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