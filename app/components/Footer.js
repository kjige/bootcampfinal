
    // Requiring react npm Package.
var React = require("react");
// var Search = require("./search");

import {link} from 'react-router';
// Create a new class and assign it in a variable Main.
class Footer extends React.Component{
    render(){
        return(
 <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <p>Copyright &copy; Your Website 2017</p>
                </div>
            </div>
        </div>
    </footer>
           
        );
    }
}

export {Footer};  
// {class1,class2}