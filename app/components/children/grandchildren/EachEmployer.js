import * as React from 'react';

class EachEmployer extends React.Component {
  render() {
    return(
      <div className='row-ls-12'>
        {/*<div className='col-xs-6 border-img'>
          <h6>Name</h6>
          <h6>Company</h6>
          <h6>Field needed</h6>
          <h6>Description</h6>
        </div>*/}
        <div className='col-ls-12 border-img'>
          <img src={this.props.image} width='100' height='100'/>
          <h6>{this.props.name}</h6>
          <h6>Is working in : {this.props.company}</h6>
          <h6>Can help with : {this.props.fieldNeeded}</h6>
          <h6>About me : {this.props.description}</h6>
        </div>
      </div>
    )
  }
}

export {EachEmployer}