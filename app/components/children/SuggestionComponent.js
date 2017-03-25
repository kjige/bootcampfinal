import * as React from 'react';
import * as axios from 'axios';

/*var BookList = React.createClass({
 
 
 
 
  render: function() {
    var books = this.state.books.map(function(book) {
      return (
        <li key={book.key}>{book.name}</li>
      );
    });

    return (
      <div>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
});*/

class SuggestionComponent extends React.Component {
  
    // Fetches the suggestion list from the server
  getSuggestionList() {
    axios.get('/suggestionslist')
      .then((res) => {
        // this.setSuggestionListState(res);
        console.log('hi', res);
      })
      .catch((error) => {
        console.log('hello i have an error', error);
      });
      }

       // Custom function we'll use to update the component state
  setSuggestionListState(suggestions) {
    this.setState({
      suggestions: suggestions.data
    });
  }

       // React exposes this function to allow you to set the default state
  // of your component
  componentWillMount() {
    return {
      suggestions: []
    };
  }

   // React exposes this function, which you can think of as the
  // constructor of your component. Call for your data here.
  componentDidMount() {
    this.getSuggestionList();
  }
  render() {
    
    return (
        <div className="box">
  
     <p>Suggestion Component</p>
             
  <img
  src="http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg"
  className="img-circle"
  alt="Cinque Terre"
  width="50"
  height="50" /> 
<h2>User</h2>
      </div>
    );
  }
}

export { SuggestionComponent };
