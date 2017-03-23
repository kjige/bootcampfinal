import * as React from 'react';
import { ForumForm } from './children/ForumForm';
import { SuggestionComponent } from './children/SuggestionComponent';

import * as axios from 'axios';

class Forum extends React.Component {
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
                      <SuggestionComponent />
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

export { Forum };