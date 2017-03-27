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

      <form onSubmit={(event) => this.saveNewPost(event)} >
        <div className='form-row'>
          <input
          id='user'
          type='hidden'
          value={this.state.user} />
          <label 
          htmlFor='name'>Name:</label><br/>
          <input 
          id='name' 
          type='text' 
          onChange={(event) => this.updateInput(event)}
          value={this.state.name}
          required />

        </div>
        <div className='form-row'>
          <label 
          htmlFor='company'>Company:</label><br/>
          <input 
          id='company' 
          type='text'
          onChange={(event) => this.updateInput(event)}
          value={this.state.company} 
          required />
        </div>
        <div className='form-row'>
          <label htmlFor='field_needed'>Field_needed:</label><br/>
          <input 
          id='field_needed' 
          type='text'
          onChange={(event) => this.updateInput(event)}
          value={this.state.field_needed} 
          required />
        </div>
        <div className='form-row'>
          <label htmlFor='image'>Image:</label><br/>
          <input 
          id='image' 
          type='text'
          onChange={(event) => this.updateInput(event)}
          value={this.state.image} 
          required />
        </div>
        <div className='form-row'>
          <label htmlFor='description'>Description:</label><br/>
          <input 
          id='description' 
          type='text'
          onChange={(event) => this.updateInput(event)}
          value={this.state.description} 
          required />
        </div>
        <div className='form-row'>
          <button
            type='submit'
            className='btn btn-sm btn-info'>
            employer Signup
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export { EmployerSignUpForm };
