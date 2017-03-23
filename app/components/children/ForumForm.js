import * as React from 'react';

class ForumForm extends React.Component {
  render() {
    return (
        <div className="box">
            
     <form>
         <div className='form-row'>
          <label htmlFor='suggestion'>What's on my mind</label><br/>
          <textarea id='suggestion' type='text' rows='5' required />
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
    );
  }
}

export { ForumForm };

