import * as React from 'react';
import * as axios from 'axios';

class UserProfile extends React.Component {

  initializeState() {
    this.setState({
      profile: []
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  componentDidMount() {
    console.log('emp id', this.props.params.id);
    // axios.get('/profilesuggestion').then((response) => {
    //   console.log('this is the suggestion', response);
    //   this.setState({
    //     suggestions: response.data
    //   });
    // });

    axios.get('/employerprofile/' + this.props.params.id).then((response) => {
      console.log('emp data', response.data);
      this.setState({
        profile: response.data
      });
    });

  }
  getProfile() {

  }

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
              {this.state.profile.map((item, index) => {
                return (
              <div key={index} className='row'>
                
                <div className="col-lg-6">
                  <img src={item.image} className='border-img' width='200' />
                </div>
                
                  
                    <div className="col-lg-6">
                      <h3>{item.name}</h3>
                      <h4>Company: {item.company}</h4>
                      <h5>Field Needed: {item.field_needed}</h5>
                      <h5>Company Description: {item.description}</h5>
                    </div>
                  
                
                {/*<EachComment />*/}
                <div className="box">

                </div>
              </div>
              )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { UserProfile };