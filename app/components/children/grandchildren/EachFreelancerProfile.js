import * as React from 'react';

class EachFreelancerProfile extends React.Component {
  render() {
    return(
      <div className='row-xs-12'>
       <div className='col-xs-12 border-img'>
          {/*<img src={this.props.image} width='100' height='100'/>*/}
          <h6>{this.props.name}</h6>
          <h6>Is working in : {this.props.field}</h6>
          <h6>Has : {this.props.experience} yrs of experience.</h6>
          {/*<h6>About me : {this.props.description}</h6>*/}
        </div>
      </div>
    )
  }
}

export {EachFreelancerProfile}