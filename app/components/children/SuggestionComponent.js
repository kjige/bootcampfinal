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
    let suggestionItem = this.state.suggestions.map((item, index) => {
      console.log(item);
        let image;
        if (item.employer[0]) {
          image = item.employer[0].image;
        } else if (item.employer[0] === undefined) {
          image = item.freelancer[0].image;
        } else if (item.freelancer[0] === undefined){
          image = './img/defaultimg.png';
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
