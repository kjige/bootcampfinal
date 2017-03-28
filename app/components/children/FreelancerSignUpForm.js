import * as React from 'react';
import * as axios from 'axios';
import { Button, notification } from 'antd';


/*ReactDOM.render(
  <div>
    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
  </div>
, mountNode);*/
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
  
  openNotificationWithIcon () {
    notification['success']({
      message: 'Profile Uploaded',
      description: 'Your profile will be displayed in the Consultants Page!',
    });
  };

  saveNewFreelancer(event) {
    event.preventDefault();
    axios.post('/freelancer', this.state).then((data) => {
      console.log('success', data);
      this.openNotificationWithIcon();
      this.context.router.push('/dash/freelancerprofile')
    })
    .catch((error) => {
      console.log('error', error);
    });
  }

  render() {
    return (
    <div className="box">
      <Button onClick={this.openNotificationWithIcon()}></Button>
      <div className='col-xs-8 col-xs-offset-2'>
        <form onSubmit={(event) => this.saveNewFreelancer(event)} >
          <div className='form-row col-xs-6'>
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

          <div className='form-row col-xs-3'>
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

        <div className='form-row col-xs-3'>
              <label htmlFor='experience'>Years of Experience</label>
              <input
              id='experience'
              type="text"
              value={this.state.experience}
              className="form-control"
              onChange={(event) => this.updateInput(event)} 
              value={this.state.experience}/>
        </div>

        <div className='form-row col-xs-12'>
          <br/>
          <button
            type='submit'
            className='btn btn-sm btn-info'
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  </div>
    );
  }
}

FreelancerSignUpForm.contextTypes = {
  router: React.PropTypes.any
};

export { FreelancerSignUpForm };
