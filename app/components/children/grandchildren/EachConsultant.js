import * as React from 'react';
import FlipCard from 'react-flipcard';

class EachConsultant extends React.Component {
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
          <FlipCard type='vertical'>
            <div className='col-xs-12 text-center border-img eachConsultant'>
                <img
                className="img-circle center-block image-size avatar"
                src={this.props.image}
                alt="" />
                <h4>{this.props.name}</h4>
            </div>
            <div className='col-xs-12 text-center border-img eachConsultant'>
              <h5 className='vertical-center'><strong>Expertise:</strong></h5><h6>{this.props.field}</h6>
              <h5><strong>Years of experience:</strong></h5><h6>{this.props.experience}</h6>
            </div>
          </FlipCard>
        </div>
      );
  }
}

export { EachConsultant };
