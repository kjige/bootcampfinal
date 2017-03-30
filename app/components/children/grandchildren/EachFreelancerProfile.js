import * as React from 'react';

class EachFreelancerProfile extends React.Component {
  render() {
    return(

      <div className='row-xs-12'>
       <div className='col-xs-12 border-img emp'>
          <img src={this.props.image} width='100' height='100' className='img-circle avatar'/>
          <h5>{this.props.name}</h5>
          <h6>Working in : {this.props.field}</h6>
          <h6>Has : {this.props.experience} yrs of experience.</h6>
        </div>
      </div>
    )
  }
}

export {EachFreelancerProfile}