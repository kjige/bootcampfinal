import * as React from 'react';
import * as axios from 'axios';
import {EachSuggestion} from './grandchildren/EachSuggestion';

class SuggestionComponent extends React.Component {

  componentWillMount() {
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      console.log('userId', userId);
      this.setState({
        user: userId,
        suggestions: []
      })
  }

  componentDidMount() {
    axios.get('/usersuggestion').then(function(response) {
      console.log(response);
      response.data.map((item)=>{
        this.state.suggestions.push(item);
      })
    });
  }
  render() {
    
    return (
        <div className="box">
          <EachSuggestion user={this.state.userId} suggestion={this.state.suggestion} />
        </div>
    );
  }
}

export { SuggestionComponent };
