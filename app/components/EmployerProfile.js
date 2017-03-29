import * as React from 'react';
import * as axios from 'axios';
import {EachEmployer} from './children/grandchildren/EachEmployer';

class EmployerProfile extends React.Component {
  
  componentWillMount(){
    this.initializeState();
    var userId = sessionStorage.getItem('userId');
    // console.log('USERID', userId);
    this.checkId(userId);
    this.getJobs();
  }

  initializeState() {
    this.setState({
      docs: []
    })
  }

  checkId(userId) {
    if (userId) {
      axios.post('findId', {'userId': userId}).then((res)=>{
        if (res) this.context.router.push('/dash/employerprofile');
      })
    }
  }

  getJobs() {
    axios.get('/employers').then((res)=> {
      // console.log('EMPS', res);
      this.setState({
        docs: res.data
      });
    });
  }

  render() {

    return (
      <div className='container'>

        <div className="row">
          <div className="box">
               <hr />
                    <h2 className="intro-text text-center">Employers
                        <strong> Profile </strong>
                    </h2>
                    <hr />
            {this.state.docs.map((item,i)=>{
              {/*console.log(item);*/}
              return (
                <a href="#/dash/userprofile">

                <div key={i} className='col-xs-3'>
                  <EachEmployer 
                  name={item.name} 
                  company={item.company} 
                  fieldNeeded={item.field_needed} 
                  description={item.description}
                  image={item.image}
                  />
                </div>
                </a>
              )
            })}
              </div>
          </div>
      </div>
    );

  }
}

EmployerProfile.contextTypes = {
  router: React.PropTypes.any
};

export { EmployerProfile };