import * as React from 'react';
import {EachUserProfile} from './children/grandchildren/EachUserProfile';

class UserProfile extends React.Component {

  render() {

    return (
      <div className='container'>
       <div className="row">
        <div className="box">
          <div className="col-lg-12">
            <hr />
            <h2 className="intro-text text-center"> 
                <strong>User Profile</strong>
            </h2>
            <hr />
            <EachUserProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { UserProfile };