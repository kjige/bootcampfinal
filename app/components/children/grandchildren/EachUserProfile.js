import * as React from 'react';
import * as axios from 'axios';
// import { EachSuggestion } from './grandchildren/EachSuggestion';
import { EachComment } from './EachComment';

class EachUserProfile extends React.Component {

    componentWillMount() {
        // getUserId() =>
        var userId = sessionStorage.getItem('userId');
        this.setState({
            user: userId,
            suggestions: []
        })
    }

    componentDidMount() {
        // console.log(this.props.params.id);
        axios.get('/usersuggestion').then((response) => {
            console.log('this is the suggestion', response);
            this.setState({
                suggestions: response.data
            });
        });
    }

    render() {
     
        return (
            <div className='row'>
                <div className="col-lg-6">

                    <img src='./img/defaultimg.png' className='border-img' />
                </div>
                <div className="col-lg-6">

                    <h3 >User Name</h3>
                </div>
                <EachComment />
                <div className="box">
                    
                </div>
            </div>

        );
    }
}


export { EachUserProfile };
