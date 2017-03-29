import * as React from 'react';
import * as axios from 'axios';
import { EachSuggestionO } from './grandchildren/EachSuggestionO';

class SuggestionComponentO extends React.Component {

  componentWillMount() {
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      this.setState({
        user: userId,
        suggestions: []
      })
  }

  componentDidMount() {
    axios.get('/userownersuggestion').then((response) => {
      console.log('this is the suggestion', response);
      this.setState({
        suggestions: response.data
      });
    });
  }

  render() {
    let suggestionItem = this.state.suggestions.map((item, index) => {
      console.log(item);
        let image;
        if (item.employer[0] === undefined || item.freelancer[0] === undefined) {
          image = 'http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg';
        }    
      return (
        <EachSuggestionO user={item.username} key={item._id} suggestion={item.ownerSuggestion} image={image} />
      )
    });
    return (
      <div className="box">
        {suggestionItem}
      </div>
    );
  }
}

export { SuggestionComponentO };
