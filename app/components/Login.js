import * as React from 'react';
import * as axios from 'axios';

class Login extends React.Component{
  initializeState() {
    this.setState({
      username: '',
      password: ''
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/login", this.state).then((data)=>{
      console.log('success', data);
      this.context.router.push('/home');
    
    }).catch((error)=>{
      console.log('error', error);
    });
  }
  
  updateInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="row">
      <div className="col-xs-4 col-xs-offset-4 box text-center">
        <h1>Login</h1>
        <form onSubmit={(event)=> this.handleSubmit(event)} >
            
          <div className="form-group">
            <input 
              id="username" 
              className="form-control"
              type="text" 
              placeholder="Username" 
              onChange={(event)=>this.updateInput(event)}
              value={this.state.username}
              required />
          </div>
          
          <div className="form-group">
            <input 
              id="password" 
              className="form-control"
              type="password" 
              placeholder="Password" 
              onChange={(event)=>this.updateInput(event)}
              value={this.state.password}
              required />
          </div>
          
          <div className="form-group">
            <input 
              className="form-control"
              type="submit" 
              value="Submit" 
              className="btn btn-primary btn-lg btn-block" />
          </div>
                
        </form>
            
      </div>
      </div>
    )
  }
}

Login.propTypes = {
  handleSubmit: React.PropTypes.func
};

Login.contextTypes = {
  router: React.PropTypes.any
};

export {Login};  