import * as React from 'react';
import * as axios from 'axios';

import { helpers } from '../utils/helpers';

class EmployerSignUpForm extends React.Component {

  initializeState() {
    this.setState({
      name: '',
      company: '',
      field_needed: '',
      image: '',
      description: ''
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

  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  

  saveNewPost(event) {
    event.preventDefault();
    axios.post('/employer', this.state).then((res) => {
            console.log('success', res);

        })
        .catch((error) => {
            console.log('error', error);
        });
  }
  
  render() {
    return (
      <div className="box">
      <div className='col-xs-8 col-xs-offset-2'>
        <form onSubmit={(event) => this.saveNewPost(event)} >
          <div className='form-row col-xs-6'>
            <input
            id='user'
            type='hidden'
            value={this.state.user} />
            <label 
            htmlFor='name'>Name</label><br/>
            <input 
            id='name' 
            type='text'
            className='form-control' 
            onChange={(event) => this.updateInput(event)}
            value={this.state.name}
            required />
          </div>

          <div className='form-row col-xs-6'>
            <label 
            htmlFor='company'>Company</label><br/>
            <input 
            id='company' 
            type='text'
            className='form-control'
            onChange={(event) => this.updateInput(event)}
            value={this.state.company} 
            required />
          </div>
          <div className='form-row col-xs-6'>
            <br/>
            <label htmlFor='field_needed'>Field_needed</label><br/>
            <input 
            id='field_needed' 
            type='text'
            className='form-control'
            onChange={(event) => this.updateInput(event)}
            value={this.state.field_needed} 
            required />
          </div>

          <div className='form-row col-xs-6'>
            <br/>
            <label htmlFor='image'>Image</label><br/>
            <input 
            id='image' 
            type='text'
            className='form-control'
            onChange={(event) => this.updateInput(event)}
            value={this.state.image} 
            required />
          </div>

          <div className='form-row col-xs-6'>
            <br/>
            <label htmlFor='description'>Description:</label><br/>
            <input 
            id='description' 
            type='text'
            className='form-control'
            onChange={(event) => this.updateInput(event)}
            value={this.state.description} 
            required />
          </div>

          <div>
            <div className='form-row col-xs-12'>
            <br/>
              <button
                type='submit'
                className='btn btn-sm btn-info'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
  }
}

export { EmployerSignUpForm };
