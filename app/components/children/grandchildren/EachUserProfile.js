import * as React from 'react';

class EachUserProfile extends React.Component {

  render() {

    return (
     <div className='container'>                    
            <div className="user row">
                <div className="col-lg-6">

                    <img src='./img/defaultimg.png' className='border-img' style={{float: 'left'}} />
                </div>
                <div className="col-lg-6">

                    <h3 >User Name</h3>
                </div>
            </div>
            <div className="row">

                <form>
                    hi
                </form>
            </div>
        </div>
    );
  }
}

export { EachUserProfile };