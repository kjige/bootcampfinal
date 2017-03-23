var React = require("react");

class Header2 extends React.Component{
    render(){
        return(
    <div>
        <div className="brand">Work It!!!</div>

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
                        <a href='#/home'>Home</a>
                    </li>
                    <li>
                        <a href='#/about'>About</a>
                    </li>
                    <li>
                        <a href='#/contact'>Contact</a>
                    </li>
                    <li>
                        <a href='#/dash/createprofile/forum'>Forum</a>
                    </li>
                    <li>
                        <a href='#/dash/createprofile'>Create Profile</a>
                    </li>
                    <li>
                        <a href='#/dash/logout'>Logout</a>
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

export {Header2};  