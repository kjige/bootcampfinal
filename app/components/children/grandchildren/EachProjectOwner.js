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
        <div className="col-lg-3 center-block">
          <FlipCard>
            <div>
              <img
              width="200"
              height="400"
              className="img-responsive img-left img-circle border-img"
              src="http://placehold.it/350x150"
              alt="" />
              <h4>{this.props.name}</h4>
            </div>
            <div>
              <h6>Company: {this.props.company}</h6>
              <h6>Description: {this.props.description}</h6>
              <h6>Field Needed: {this.props.field_needed}</h6>
            </div>
          </FlipCard>
        </div>
      );
  }
}

export { EachProjectOwner };
