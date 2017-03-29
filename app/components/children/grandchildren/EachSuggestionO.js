import * as React from 'react';

class EachSuggestionO extends React.Component {
  render() {
    var suggestionList = this.props.suggestion.map((item, index) => {
      return (<li key={index}>{item.suggestion[0]}</li>);
      console.log('sug list', {item});
    }); 
    return(
      <div>    
        <img
        src={this.props.image}
        className="img-circle"
        alt="Cinque Terre"
        width="50"
        height="50" /> 
        <div>
        <h2>{this.props.user}</h2>
        <ul>
          {suggestionList}
        </ul>
        </div>
      </div>
    )
  }
}

export {EachSuggestionO}