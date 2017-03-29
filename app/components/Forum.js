import * as React from 'react';

import { ForumForm } from './children/ForumForm';
import { SuggestionComponent } from './children/SuggestionComponent';

import * as axios from 'axios';

class Forum extends React.Component {
  
  componentWillMount(){
    var userId = sessionStorage.getItem('userId');
    this.checkId(userId);
    console.log(userId);
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
        if (res) this.context.router.push('/dash/forum');
      })
    }
  }

  render() {
    return (
      <div className='container'>
          <div className="row">
              <div className="box text-center">
                  
                  <h2>Share with community</h2>
                  
                  <div className="col-lg-9">
                       <hr />
                  <p>What others are saying...</p>
                  <hr />
                      <SuggestionComponent />
                  </div>
                  <div className="col-lg-3">
                    <hr />
                    <p>How You can help</p>
                    <hr />
                      <ForumForm />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

Forum.contextTypes = {
  router: React.PropTypes.any
};

export { Forum };