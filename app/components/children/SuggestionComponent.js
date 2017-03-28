import * as React from 'react';
import * as axios from 'axios';
import {EachSuggestion} from './grandchildren/EachSuggestion';

class SuggestionComponent extends React.Component {

  componentWillMount() {
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      this.setState({
        user: userId,
        suggestions: []
      })
  }


  componentDidMount() {
    axios.get('/usersuggestion').then((response)=>{
      console.log(response);
      this.setState({
        suggestions: response.data
      });
    });
  }

  render() {
    
    return (
        <div className="box">
          {this.state.suggestions.map((item,i)=>{
            return (
              <div key={i}>
                <EachSuggestion user={this.props.user} suggestion={item.suggestion} />
              </div>
            )
          })}
        </div>
    );
  }
}

export { SuggestionComponent };
