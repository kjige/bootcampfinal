
    // Requiring react npm Package.
var React = require("react");
// var Search = require("./search");

import { Link } from 'react-router';
// Create a new class and assign it in a variable Main.
class Header extends React.Component{
    render(){
        return(
    <div>
        <div className="brand">App Name</div>

    {/*<!-- Navigation -->*/}
    <nav className="navbar navbar-default" role="navigation">
        <div className="container">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                {/*<!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->*/}
                <a className="navbar-brand" href="index.html">Business Casual</a>
            </div>
            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <Link to='login' activeClassName='active'>Login</Link>
                    </li>
                    <li>
                        <a href="contact.html">Sign Up</a>
                    </li>
                </ul>
            </div>
            {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container -->*/}
    </nav>
    </div>
           
        );
    }
}

export {Header};  
// {class1,class2}