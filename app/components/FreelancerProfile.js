import * as React from 'react';
import * as axios from 'axios';
import { EachFreelancerProfile } from './children/grandchildren/EachFreelancerProfile';



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

                <a href={"#/dash/userprofileconsultant/" + item._id}>

                <div key={i} className='col-xs-3'>
                  <EachFreelancerProfile
                    name={item.name}
                    field={item.field}
                    experience={item.experience}
                    image={item.image}
                  />
                </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    );

  }
}

FreelancerProfile.contextTypes = {
  router: React.PropTypes.any
};

export { FreelancerProfile };