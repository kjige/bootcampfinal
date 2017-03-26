import * as React from 'react';
// import { Button } from 'antd';
import * as axios from 'axios';

class FreelancerSignUpForm extends React.Component {

  // Event handler for the input values
  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleUpdateField(newVal) {
    const newState = {};
    newState[newVal.target.id] = newVal.target.value;
    this.setState(newState);
  }

  // Initial State
  initializeState() {
    this.setState({
      name: '',
      field: '',
      experience: ''
    });
  }

  componentWillMount() {
    this.initializeState();
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      console.log('userId', userId);
      this.setState({
        user: userId
      });
  }

saveNewPost(data) {
    axios.post('/freelancer', data).then((data) => {
            console.log('success', data);

        })
        .catch((error) => {
            console.log('error', error);
        });
        console.log('freelancer profile submitted', data);
  }

  render() {
    return (
    <div className="box">
      <form onSubmit={() => this.saveNewPost(this.state)}>
        <div className='form-row col-lg-6'>
          {/*<div className="form-group">*/}
            <input 
            id='user'
            type='hidden'
            value={this.state.user} />
              <label htmlFor='name'>Name</label>
              <input 
              id='name'
              type="text"
              className="form-control"
              onChange={(event) => this.updateInput(event)} 
              value={this.state.name} />
          {/*</div>*/}
        </div>

        <div className='form-row'>
            <label htmlFor='field'>Field</label><br/>
            <select
              id='field'
              className="form-control"
              style={{ width: 120 }}
              onChange={(newVal) => this.handleUpdateField(newVal)}
              value={this.state.field}
            >
              <option value="Legal">Legal</option>
              <option value="Finance">Finance</option>
              <option value="Food">Food</option>
              <option value="Logistic">Logistic</option>
              <option value="Transportation">Transportation</option>
              <option value="Contractor">Contractor</option>              
              <option value="Other-services">Other services</option>
            </select>
          </div>

        {/*<div className='form-row col-lg-6'>
              <label htmlFor='field'>Field</label>
              <input
              id='field'
              type="text"
              className="form-control"
              onChange={(event) => this.updateInput(event)} />
        </div>*/}
        <div className='form-row col-lg-6'>
              <label htmlFor='experience'>Experience</label>
              <input
              id='experience'
              type="text"
              className="form-control"
              onChange={(event) => this.updateInput(event)} 
              value={this.state.experience}/>
        </div>
        <div className='form-row'>
          <button
            type='submit'
          >
            Freelancer Signup
          </button>
        </div>
      </form>
    </div>
    );
  }
}

export { FreelancerSignUpForm };
