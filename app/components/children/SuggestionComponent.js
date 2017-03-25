import * as React from 'react';
import * as axios from 'axios';

class SuggestionComponent extends React.Component {

  componentWillMount() {
    // getUserId() =>
    var userId = sessionStorage.getItem('userId');
      console.log('userId', userId);
      this.setState({
        user: userId
      })
  }

  componentDidMount() {
    axios.get('/usersuggestion').then(function(response) {
      console.log(response);
    });
  }
  render() {
    return (
        <div className="box">
     <p>Suggestion Component</p>
             
  <img src="http://greenwayconsults.com/wp-content/uploads/2015/05/Blonde-Female-Professional.jpg" className="img-circle" alt="Cinque Terre" width="50" height="50" /> 
<h2>User</h2>
      </div>
    );
  }
}

export { SuggestionComponent };
