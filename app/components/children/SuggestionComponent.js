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
      console.log('this is the suggestion', response.data);
      this.setState({
        suggestions: response.data
      });
    });
  }

  render() {
    let suggestionItem = this.state.suggestions.map((item, index) => {
        let image;
        if (item.employer[0] === undefined) {
          image = item.freelancer[0].image;
        } else if (item.freelancer[0] === undefined) {
          image = 'http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg';
        }
      return (
        <EachSuggestion user={item.username} key={item._id} suggestion={item.suggestion} image={image} />
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
