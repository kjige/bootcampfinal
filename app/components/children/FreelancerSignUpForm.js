import * as React from 'react';
// import { Button } from 'antd';

class FreelancerSignUpForm extends React.Component {
  render() {
    return (
    <div className="box">
      <form>
        <div className='form-row'>
          <label htmlFor='name'>Name:</label><br/>
          <input id='name' type='text' required />
        </div>
      </form>
    </div>
    );
  }
}

export { FreelancerSignUpForm };
