import * as React from 'react';

class EachEmployer extends React.Component {
  render() {
    return(
      <div>
        <div className='col-xs-6'>
          <h6>Name</h6>
          <h6>Company</h6>
          <h6>Field needed</h6>
          <h6>Description</h6>
        </div>
        <div className='col-xs-6'>
          <h6>{this.props.name}</h6>
          <h6>{this.props.company}</h6>
          <h6>{this.props.fieldNeeded}</h6>
          <h6>{this.props.description}</h6>
        </div>
      </div>
    )
  }
}

export {EachEmployer}