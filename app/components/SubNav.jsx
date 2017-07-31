var React = require('react');
var {Link, IndexLink} = require('react-router');
const settingslogo = require('../images/settinglogo.png');
import Popup from 'react-popup';

var SubNav = React.createClass({

  // getInitialState: function () {
  //   return { isEditing: false };
  // },

  handleClick(){

          Popup.alert('Page is saved');

  },

  render: function(){
    return(
      <div className="row sub-bar">
        <div className="column medium-4 settingslogo">
           <IndexLink to='/personalize' activeClassName="active" activeStyle={{fontWeight: 'bold'}}><img src={settingslogo}/></IndexLink>
        </div>
        <Popup />
        <div className="column medium-5 medium-offset-3 sub-menu">
            <div className="column medium-6">
              <li className="no-bullet">
                <IndexLink to='/story' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Our Story</IndexLink>
              </li>
            </div>
            <div className="column medium-6">
              <li className="no-bullet">
                <IndexLink to='/wishlist' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Our Wishlist</IndexLink>
              </li>
            </div>
        </div>
        <div className="column medium-3 large-3 ">
          <div className="column medium-offet-4 medium-4">
            <IndexLink to='/publish' activeClassName="active" activeStyle={{fontWeight: 'bold'}}><span className="label">Publish</span></IndexLink>
          </div>
          <div className="column medium-4">
            {this.props.isEditing ? <IndexLink to='/publish' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Saved</IndexLink> : null}
          </div>
          <div className="column medium-4">
            {this.props.isEditing ? <IndexLink to='/publish' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Editing..</IndexLink> : null}
          </div>
        </div>
      </div>

    );
  }

});

module.exports = SubNav;
