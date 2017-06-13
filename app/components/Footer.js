import React from 'react';

import {link} from 'react-router';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>Copyright &copy; Your Website 2017</p>
                    </div>
                </div>
            </footer>
           
        );
    }
}

export {Footer};  