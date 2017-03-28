import * as React from 'react';
import * as axios from 'axios';
import { EachSuggestion } from './grandchildren/EachSuggestion';

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
    axios.get('/usersuggestion').then((response) => {
      console.log('this is the suggestion', response);
      this.setState({
        suggestions: response.data
      });
    });
  }

  render() {
    var suggestionItem = this.state.suggestions.map((item, index) => {
      return (
        <EachSuggestion user={item.username} key={item._id} suggestion={item.suggestion[0].suggestion} />
      )
    });
    return (
      <div className="box">
        {suggestionItem}
      </div>
    );
  }
}

export { SuggestionComponent };
