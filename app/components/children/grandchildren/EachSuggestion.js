import * as React from 'react';

class EachSuggestion extends React.Component {
  render() {
    return(
      <div>    
        <img
        src="http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg"
        className="img-circle"
        alt="Cinque Terre"
        width="50"
        height="50" /> 

        <h2>{this.props.user}</h2>
        <h5>{this.props.suggestion}</h5>
      </div>
    )
  }
}

export {EachSuggestion}