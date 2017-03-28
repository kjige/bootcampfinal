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
        <div className="col-lg-3 center-block">
          <FlipCard type='vertical'>
            <div>
              <img
              width="200"
              height="400"
              className="img-responsive img-left img-circle border-img"
              src="http://placehold.it/350x150"
              alt="" />
              <h4>{this.props.name}</h4>
            </div>
            <div className='align-bottom'>
              <h6>Expertise: {this.props.field}</h6>
              <h6>Years of experience: {this.props.experience}</h6>
            </div>
          </FlipCard>
        </div>
      );
  }
}

export { EachConsultant };
