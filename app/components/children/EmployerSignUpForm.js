import * as React from 'react';
// import { Button } from 'antd';

class EmployerSignUpForm extends React.Component {
  render() {
    return (
        <div className="box">
      <form>
        <div className='form-row form-group'>
          <label htmlFor='name'>Name:</label><br/>
          <input id='name' type='text' className='from-control' required />
        </div>
        <div className='form-row'>
          <label htmlFor='company'>Company:</label><br/>
          <input id='company' type='text' required />
        </div>
        <div className='form-row'>
          <label htmlFor='field_needed'>Field_needed:</label><br/>
          <input id='field_needed' type='text' required />
        </div>
        <div className='form-row'>
          <label htmlFor='image'>Image:</label><br/>
          <input id='image' type='text' required />
        </div>
        <div className='form-row'>
          <label htmlFor='description'>Description:</label><br/>
          <input id='description' type='text' required />
        </div>
        <div className='form-row'>
          <button
            type='submit'
          >
            employer Signup
          </button>
        </div>
      </form>
      </div>
    );
  }
}

export { EmployerSignUpForm };
