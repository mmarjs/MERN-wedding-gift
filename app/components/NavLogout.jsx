var React = require('react');
var {Link, IndexLink} = require('react-router');
const logo = require('../images/logo.png');

var Nav = React.createClass({

  render: function(){
    return(
      <nav className="top-bar">
          <div className="column medium-6">
            <div className="column large-offset-11 medium-offset-1 small-offset-4">
              <img src={logo}/>
            </div>
          </div>
        <div className="column medium-6 small-12">
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Find a Couple</IndexLink>
              </li>
              <li>
                <Link to='/countdown' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Browse Gifts</Link>
              </li>
              <li>
                <Link to='/Login' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Logout</Link>
              </li>
          </ul>
          </div>

          </div>
      </nav>
    );
  }

});

module.exports = Nav;
