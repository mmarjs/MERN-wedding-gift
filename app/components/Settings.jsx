var React = require('react');
var {Link, IndexLink} = require('react-router');
const settingslogo_white = require('../images/settinglogo_white.png');
import Popup from 'react-popup';

class Settings extends React.Component{

  handleClick(){

          Popup.alert('Page is saved');

  }

  render(){
    return(
      <div className="row sub-bar1">
        <div className="column medium-2" style={{background:"#ae573c",color:"white",paddingTop:"0.7em",fontWeight:'bold',fontSize:"20px"}}>
          <div><img style={{width:"30px", marginBottom:"0em"}} src={settingslogo_white}/> Settings ></div>
        </div>
        <Popup />
        <div className="column medium-9" style={{paddingTop:"1em"}}>
            <div className="column medium-3">
              <li className="no-bullet">
                <IndexLink to='/personalize' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Personalize</IndexLink>
              </li>
            </div>
            <div className="column medium-3">
              <li className="no-bullet">
                <IndexLink to='/accountdetails' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Account Details</IndexLink>
              </li>
            </div>
            <div className="column medium-3" style={{float:"left"}}>
              <li className="no-bullet">
                <IndexLink to='/paymentgifts' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Payment & Gifts</IndexLink>
              </li>
            </div>
        </div>
        <div className="column medium-1" style={{paddingTop:"1em"}}>
            <button isHollow onClick={this.handleSubmit} style={{border:"1px solid #f2f2f2",padding:"5px 20px 5px 20px", color:"#ae573c",marginLeft:"30%",marginRight:"50%"}}>Save</button>
        </div>
      </div>
    );
  }
}

module.exports = Settings;
