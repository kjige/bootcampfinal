import * as React from 'react';
import { FreelancerSignUpForm } from './children/FreelancerSignUpForm';
import { EmployerSignUpForm } from './children/EmployerSignUpForm';
// import * as axios from 'axios';
// import { notification } from 'antd';

class CreateProfile extends React.Component {
  
  render() {
    return (
      <div className='container'>
          <div className="row">
              <div className="box">
          <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                   <li>
                        <a href='#/createprofile'>As whom you want to sign up ??</a>
                    </li>
                    <li>
                        <a href='#freelancer'>Freelancer</a>
                    </li>
                     <li>
                        <a href='#/employer'>Employer</a>
                    </li>
                </ul>
          </div>
        </div>
      </nav>
        <hr />
                {this.props.children}

        </div>
        </div>
      </div>
    );
  }
}

// CreateProfile contextTypes
// Needed to get reference to router context
// so that we can redirect the user programmatically
// with react router.

// CreateProfile.contextTypes = {
//   router: React.PropTypes.any
// };

export { CreateProfile };
