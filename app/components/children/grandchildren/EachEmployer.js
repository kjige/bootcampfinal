import * as React from 'react';

class EachEmployer extends React.Component {
  render() {
    return(
      <div className='row-ls-12'>
       <div className='col-ls-12 border-img emp'>
          <img src={this.props.image} width='100' height='100' className='img-circle avatar'/>
          <h5>{this.props.name}</h5>
          <h6>Part of : {this.props.company}</h6>
          <h6>Need help with : {this.props.fieldNeeded}</h6>
          <h6>About us : {this.props.description}</h6>
        </div>
      </div>
    )
  }
}

export {EachEmployer}