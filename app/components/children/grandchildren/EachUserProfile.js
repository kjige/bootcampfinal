import * as React from 'react';
import {EachComment} from './EachComment';

class EachUserProfile extends React.Component {

  render() {

    return (
            <div className='row'>
                <div className="col-lg-6">

                    <img src='./img/defaultimg.png' className='border-img' />
                </div>
                <div className="col-lg-6">

                    <h3 >User Name</h3>
                </div>
                <EachComment />
          </div>
    );
  }
}

export { EachUserProfile };