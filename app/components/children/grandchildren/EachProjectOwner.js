import * as React from 'react';
import FlipCard from 'react-flipcard';

class EachProjectOwner extends React.Component {
  initializeState() {
    this.setState({
      isFlipped: false
    });
  }

  showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false     
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

  componentWillMount() {
    this.initializeState();
  }
  
  render() {
    return (
        <div className="col-lg-3">
          <FlipCard>
            <div className='col-xs-12 text-center border-img eachConsultant'>
              <img
              className="img-circle image-size center-block"
              src={this.props.image}
              alt="" />
              <h4>{this.props.name}</h4>
            </div>
            <div className='col-xs-12 text-center border-img eachConsultant'>
              <h5><strong>Company:</strong> </h5><h6>{this.props.company}</h6>
              <h5><strong>Description:</strong> </h5><h6>{this.props.description}</h6>
              <h5><strong>Field Needed:</strong> </h5><h6>{this.props.field_needed}</h6>
            </div>
          </FlipCard>
        </div>
      );
  }
}

export { EachProjectOwner };
