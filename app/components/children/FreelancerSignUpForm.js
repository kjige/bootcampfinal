import * as React from 'react';
import * as axios from 'axios';

class FreelancerSignUpForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      field: 'Legal',
      experience: '' };
  }

  // Event handler for the input values
  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleUpdateField(newVal) {
    this.setState({
      field: newVal
    });
  }

  saveNewFreelancer(event) {
    event.preventDefault();
    axios.post('/freelancer', this.state).then((data) => {
      console.log('success', data);
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    return (
    <div className="box">
      <form onSubmit={(event) => this.saveNewFreelancer(event)} >
        <div className='form-row col-lg-6'>
          {/*<div className="form-group">*/}
              <label htmlFor='name'>Name</label>
              <input 
              id='name'
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(event) => this.updateInput(event)} />
          {/*</div>*/}
        </div>

        <div className='form-row col-lg-6'>
            <label htmlFor='field'>Field</label><br/>
            <select
              id='field'
              className="form-control"
              style={{ width: 120 }}
              value={this.state.field}
              onChange={(event) => this.updateInput(event)}
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

        <div className='form-row col-lg-6'>
              <label htmlFor='experience'>Experience</label>
              <input
              id='experience'
              type="text"
              value={this.state.experience}
              className="form-control"
              onChange={(event) => this.updateInput(event)} />
        </div>
        <br/>
        <div className='form-row col-lg-6'>
          <button
            type='submit'
            className='btn btn-sm btn-info'
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
