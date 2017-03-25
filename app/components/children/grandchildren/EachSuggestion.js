import * as React from 'react';

class EachSuggestion extends React.Component {
  render() {
    var suggestionList = this.props.suggestion.map((item, index) => {
      return (<li key={index}>{item}</li>);
      console.log('sug list', {item});
    }); 
    return(
      <div>
        <p>Suggestion Component</p>
             
        <img
        src="http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg"
        className="img-circle"
        alt="Cinque Terre"
        width="50"
        height="50" /> 

        <h2>{this.props.user}</h2>
        <ul>
          {suggestionList}
        </ul>
      </div>
    )
  }
}

export {EachSuggestion}