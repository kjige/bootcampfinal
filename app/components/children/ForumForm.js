import * as React from 'react';
import * as axios from 'axios';

class ForumForm extends React.Component {

  initializeState() {
    this.setState({
      suggestion: ''
    });
  }

  componentWillMount() {
    this.initializeState();
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      this.setState({
        user: userId
      })
  }

  updateInput(event) {
    const newState = {};

    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
  

  saveNewPost(data) {
    axios.post('/suggestion', data).then((data) => {
            console.log('success', data);

        })
        .catch((error) => {
            console.log('error', error);
        });
        console.log('suggestion submitted', data);
  }
  render() {
    return (
        <div className="box">
            
     <form onSubmit={() => this.saveNewPost(this.state)} >
         <div className='form-row'>
           <input
           id='user'
           type='hidden'
           value={this.state.user} />
          <label htmlFor='suggestion'>What's on my mind</label><br/>
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
    );
  }
}

export { ForumForm };

