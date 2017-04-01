import * as React from 'react';

class EachSuggestion extends React.Component {
  render() {
    var suggestionList = this.props.suggestion.map((item, index) => {
      return (<li className='pull-left' key={index}>{item.suggestion[0]}</li>);
    });
    return (
      <div>
        <div className='row col-xs-8 col-xs-offset-2 panel'>
          <div className="col-xs-6">
            <div className="col-xs-3">
              <img
                src={this.props.image}
                className="img-circle"
                alt="Cinque Terre"
                width="50"
                height="50" />
            </div>
            <div className="col-xs-3">
              <h2>{this.props.user}</h2>
            </div>
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