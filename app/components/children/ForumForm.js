import * as React from 'react';

class ForumForm extends React.Component {
  // Form Event Handlers

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.submitAction(this.state);
  // }

  handleUpdateTextAreaInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }
   // Setting Initial State

  initializeState() {
    this.setState({
      suggestion: "Let's write something..."
    });
  }

  // Lifecycle Methods

  componentWillMount() {
    this.initializeState();
  }
  render() {
    return (
        <div className="box">
            
     <form>
         <div className='form-row'>

          <label htmlFor='suggestion'>What's in my mind</label><br/>
          <textarea
           defaultValue={this.state.suggestion}
           id='suggestion'
           type='text'
           rows='5'
           onChange={(event) => this.handleUpdateTextAreaInput(event)}
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

