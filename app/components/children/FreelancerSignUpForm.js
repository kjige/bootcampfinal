import * as React from 'react';
// import { Button } from 'antd';

class FreelancerSignUpForm extends React.Component {

  // Event handler for the input values
  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleUpdateField(newVal) {
    this.setState({
      category: newVal
    });
  }

  // Initial State
  initializeState() {
    this.setState({
      name: '',
      field: '',
      experience: ''
    });
  }
  render() {
    return (
    <div className="box">
      <form>
        <div className='form-row col-lg-6'>
          {/*<div className="form-group">*/}
              <label htmlFor='name'>Name</label>
              <input 
              id='name'
              type="text"
              className="form-control"
              onChange={(event) => this.updateInput(event)} />
          {/*</div>*/}
        </div>

        <div className='form-row'>
            <label htmlFor='field'>Field</label><br/>
            <select
              id='field'
              className="form-control"
              style={{ width: 120 }}
              onChange={(newVal) => this.handleUpdateField(newVal)}
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
              onChange={(event) => this.updateInput(event)} />
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
