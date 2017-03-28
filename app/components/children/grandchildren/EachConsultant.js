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
      isFlipped: false,
      docs: []      
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

  getConsultants() {
    axios.get('/freelancers').then((res)=>{
      this.setState({
        docs: res.data
      });
    });
  }

  componentWillMount() {
    this.initializeState();
    this.getConsultants();
  }
  
  render() {
    this.state.docs.map((item,i)=>{
      return (
        <FlipCard>
          <div className="col-lg-3">
            <img
            width="200"
            height="400"
            className="img-responsive img-left img-circle border-img"
            src="img/intro-pic.jpg"
            alt="" />
          </div>
        </FlipCard>
      );
    });
  }
}

export { EachConsultant };
