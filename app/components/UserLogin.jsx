import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import OurStory from '../container/OurStory';
import { connect } from 'react-redux';
//import FacebookLogin from 'react-facebook-login';
const facebook = require('../images/facebook.png');
const threedots = require('../images/Asset27.png');
import {fetchAccount} from '../actions/accountAction';
import {bindActionCreators} from 'redux';
import FacebookProvider, { Login } from 'react-facebook';

class UserLogin extends React.Component{

  constructor (props, context) {
    super(props, context);
  };
  handleResponse(response){
    console.log(response);
    this.props.fetchAccount(response.tokenDetail.accessToken);
  }

  render () {
    return (
        <div className="fbbackground">
          <div className="fbcircle">
            <p style={{color:"#58b9b0",paddingTop:"10%",fontSize:"40px"}}> Where wishes <br/> comes true</p>
            <div style={{border:"3px solid",height:"3px",width:"70%", color:"#d3d3d3", marginLeft:"15%"}}> </div>

            <div>
              <img src={facebook} style={{marginTop:"6em"}}/>
                <FacebookProvider appId="2252368521655505">
                    <Login
                    scope="email"
                    onResponse={this.handleResponse.bind(this)}
                    >
                    <p style={{color:"black"}}>Login via Facebook</p>
                    </Login>
                  </FacebookProvider>
              <img src={threedots}/>
            </div>

          </div>
        </div>
    );
  }

}

UserLogin.contextTypes = {
  router: React.PropTypes.object
};

export default connect()(UserLogin);
