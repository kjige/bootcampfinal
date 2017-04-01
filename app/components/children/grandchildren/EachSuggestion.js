import * as React from 'react';

class EachSuggestion extends React.Component {
  render() {
    var suggestionList = this.props.suggestion.map((item, index) => {
      return (
        <div key={index}>
          <li className='pull-left'>{item.suggestion[0]}</li>
          <br/>
        </div>
      )
    });

    return (
      <div>
        <div className='row col-xs-10 col-xs-offset-1 panel'>
          <div className="col-xs-6">
            <div className="col-xs-3 col-xs-offset3">
              <img
                src={this.props.image}
                className="img-circle"
                alt="Cinque Terre"
                width="50"
                height="50" />
            </div>
            <div className="col-xs-6">
              <h2 className='pull-left'>{this.props.user}</h2>
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