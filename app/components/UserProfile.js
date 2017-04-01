import * as React from 'react';
import * as axios from 'axios';
import {EachProfileComment} from './children/EachProfileComment';

class UserProfile extends React.Component {

  initializeState() {
    this.setState({
      profile: [],
      suggestions: []
    });
  }

  componentWillMount() {
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    this.setState({
      user: userId
    })
    
  }

  componentDidMount() {
    console.log('emp id', this.props.params.id);
    this.getOwners();
  }
    
    getOwners() {
    axios.get('/employerprofile/' + this.props.params.id).then((response) => {
      console.log('emp data', response.data);
      this.setState({
        profile: response.data
      });
      this.setState({
        suggestions: response.data[0].ProfileSuggestion
      });
    });
  }

  updateInput(event) {
    const newState = {};

    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  saveNewPost(data) {
    axios.post('/profilesuggestionowner', data).then((data) => {
      console.log('emp comment', data);
      this.getOwners();
    })
      .catch((error) => {
        console.log('error', error);
      });
    console.log('emp commment submitted', data);
  }
  render() {



    return (
      <div className='container'>
        <div className="row">
            <div className="col-lg-12">
          <div className="box">
              <hr />
              <h2 className="intro-text text-center">
                <strong>User Profile</strong>
              </h2>
              <hr />
              {this.state.profile.map((item, index) => {
                return (
                  <div key={index} className='row'>
                    <div className="col-xs-3 col-xs-offset-3">
                      <img src={item.image} className='border-img pull-right' width='200' />
                    </div>
                    <div className="col-lg-6">
                      <h3>{item.name}</h3>
                      <h4>Company: {item.company}</h4>
                      <h5>Field Needed: {item.field_needed}</h5>
                      <h5>Company Description: {item.description}</h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-9">
            <div className='box'>
              {/*<img
                    src={this.props.image}
                    className="img-circle"
                    alt="Cinque Terre"
                    width="50"
                    height="50" />*/}
              <div>
                <h2>name</h2>
                <ul>
                  {this.state.suggestions.map((item, index) => {
                    return (
                      <div key={index}>
                        <EachProfileComment id={item.user} suggestion={item.suggestion} />
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3">

            <div className="box">
              <form onSubmit={() => this.saveNewPost(this.state)} >
                <div className='form-row'>
                  <input
                    id='user'
                    type='hidden'
                    value={this.props.user} />
                  <label htmlFor='suggestion'>What's on my mind</label><br />
                  <textarea
                    id='suggestion'
                    type='text'
                    rows='5'
                    onChange={(event) => this.updateInput(event)}
                    value={this.state.suggestion}
                    required />
                </div>
                <div className='form-row'>
                  <button
                    type='submit'
                  >
                    For you
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { UserProfile };