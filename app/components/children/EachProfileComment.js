import * as React from 'react';
import * as axios from 'axios';

class EachProfileComment extends React.Component {
  initializeState() {
    this.setState({
      id: this.props.id,
      name: ''
    });
  }

  componentWillMount() {
    this.initializeState();
  }

  componentDidMount() {
    this.getUsername(this.state.id);
  }

  getUsername(userId) {
    axios.post('/users', {'_id':userId}).then((res)=>{
      console.log('OWNER', res.data);
      this.setState({
        name: res.data[0].username
      })
    });

  }

  render() {
    return (
      <div className='col-xs-12'>
        <div className="col-xs-3">
          <h5>{this.state.name}:</h5>
        </div>
        <div className="col-xs-9">
          <h5>{this.props.suggestion}</h5>
        </div>
      </div>
    )
  }
}

export {EachProfileComment};