import * as React from 'react';
// import { Button } from 'antd';
import { EachProjectOwner } from './grandchildren/EachProjectOwner';

class HomeRow3 extends React.Component {

  
  render() {
    return (
    <div className="row">
              <div className="box">
                <div className="col-lg-12">
                    <hr />
                    <h2 className="intro-text text-center">Our 
                        <strong> Project Owners</strong>
                    </h2>
                    <hr />
                    <EachProjectOwner />
                    <EachProjectOwner />
                    <EachProjectOwner />
                    <EachProjectOwner />
                    <a href='#/dash/employerprofile'>More...</a>
                </div>
            </div>
          </div>
    );
  }
}

export { HomeRow3 };
