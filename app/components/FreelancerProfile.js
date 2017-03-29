import * as React from 'react';
import * as axios from 'axios';
import { EachFreelancerProfile } from './children/grandchildren/EachFreelancerProfile';
// import { SuggestionComponent } from './children/SuggestionComponent';
import { ForumFormC } from './children/ForumFormC';
import { SuggestionComponentC } from './children/SuggestionComponentC';

class FreelancerProfile extends React.Component {

  componentWillMount() {
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    console.log('USERID', userId);
    this.checkId(userId);
    this.getJobs();
    this.setState({
      user: userId
    });
  }

  initializeState() {
    this.setState({
      docs: []
    });
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', { 'userId': userId }).then((res) => {
        if (res) this.context.router.push('/dash/freelancerprofile');
      })
    }
  }

  getJobs() {
    axios.get('/freelancers').then((res) => {
      console.log('free', res);
      this.setState({
        docs: res.data
      });
    });
  }
  render() {

    return (
      <div className='container'>
        <div className="row">
          <div className="box">
            <hr />
            <h2 className="intro-text text-center">Consultants
                        <strong> Profile </strong>
            </h2>
            <hr />
            {this.state.docs.map((item, i) => {
              console.log(item);
              return (
                <div key={i} className='col-xs-3'>
                  <EachFreelancerProfile
                    name={item.name}
                    field={item.field}
                    experience={item.experience}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <ForumFormC />
         <div className="col-lg-9">
                       <hr />
                  <p>What others are saying...</p>
                  <hr />
                      <SuggestionComponentC />
                  </div>
      </div>
    );

  }
}

FreelancerProfile.contextTypes = {
  router: React.PropTypes.any
};

export { FreelancerProfile };