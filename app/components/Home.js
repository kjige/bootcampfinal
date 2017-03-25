import * as React from 'react';
import * as axios from 'axios';

class Home extends React.Component {
  // componentWillMount(){
  //   var userId = sessionStorage.getItem('userId');
  //   console.log('USERID', userId);
  //   this.checkId(userId);
  // }

  // checkId(userId) {
  //   if (userId) {
  //     axios.post('findId', {'userId': userId}).then((res)=>{
  //       if (res) this.context.router.push('/dash');
  //     })
  //   }
  // }

  render() {
    return (
      <div className='container'>
          <div className="row">
              <div className="box">Home
                {/*<div class="carousel">
                    <div class="item a">A</div>
                    <div class="item b">B</div>
                    <div class="item c">C</div>
                    <div class="item d">D</div>
                    <div class="item e">E</div>
                    <div class="item f">F</div>
                </div>

                <div class="next">Next</div>
                <div class="prev">Prev</div>*/}
              </div>
          </div>
      </div>
    );
  }
}

Home.propTypes = {
  isAuthenticated: React.PropTypes.func,
  checkId: React.PropTypes.func
};

Home.contextTypes = {
  router: React.PropTypes.any
};

export { Home };