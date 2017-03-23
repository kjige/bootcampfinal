import * as React from 'react';
import * as axios from 'axios';

class Register extends React.Component{
  componentWillMount(){
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    console.log('USERID', userId);
    this.checkId(userId);
  }

  initializeState() {
    this.setState({
      username: '',
      password: ''
    });
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
        if (res) this.context.router.push('/home');
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post("/register", this.state).then((res)=>{
      sessionStorage.setItem('userId', res.data._id);
      if (res.data.username===this.state.username) {
        this.context.router.push('/home');
      }
    
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
        <h1>Register</h1>
        <form onSubmit={(event)=> this.handleSubmit(event)} >
            
          <div className="form-group">
            <input 
              id="username" 
              className="form-control"
              type="text" 
              placeholder="Username" 
              onChange={(event)=>this.updateInput(event)}
              defaultValue={this.state.username}
              required />
          </div>
          
          <div className="form-group">
            <input 
              id="password" 
              className="form-control"
              type="password" 
              placeholder="Password" 
              onChange={(event)=>this.updateInput(event)}
              defaultValue={this.state.password}
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

Register.propTypes = {
  handleSubmit: React.PropTypes.func
};

Register.contextTypes = {
  router: React.PropTypes.any
};

export {Register};  