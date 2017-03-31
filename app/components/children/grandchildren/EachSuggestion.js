import * as React from 'react';

class EachSuggestion extends React.Component {
  render() {
    var suggestionList = this.props.suggestion.map((item, index) => {
      return (<li key={index}>{item.suggestion[0]}</li>);
      console.log('sug list', { item });
    });
    return (
      <div>
        <div className='row col-xs-8 panel center-block'>
          <div className="col-xs-6">
            <img
              src={this.props.image}
              className="img-circle"
              alt="Cinque Terre"
              width="50"
              height="50" />
            <h2>{this.props.user}</h2>
          </div>

          <div className='col-xs-6'>
            {suggestionList}
          </div>
        </div>
      </div>
    )
  }
}

export { EachSuggestion }