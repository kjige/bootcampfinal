import * as React from 'react';
import * as axios from 'axios';
import { EachSuggestion } from './grandchildren/EachSuggestion';

class SuggestionComponent extends React.Component {

  componentWillMount() {
    var userId = sessionStorage.getItem('userId');
      this.setState({
        user: userId,
        suggestions: []
      })
  }

  componentDidMount() {
    axios.get('/usersuggestion').then((response) => {
      console.log('this is the suggestion', response);
      let reverse = response.data.reverse();
      this.setState({
        suggestions: reverse
      });
    });
  }

  render() {

    let suggestionItem = this.state.suggestions.map((item, index) => {

        let image;
        if (item.employer[0]) {
          image = item.employer[0].image;
        } else if (item.freelancer[0]) {
          image = item.freelancer[0].image;
        } else if (!item.employer[0] && !item.freelancer[0]){
          image = './img/defaultimg.png';
        }

      return (
        <div key={index}>
          <EachSuggestion user={item.username} key={item._id} suggestion={item.suggestion} image={image} />
        </div>
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
