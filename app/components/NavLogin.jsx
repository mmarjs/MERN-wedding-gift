var React = require('react');
var {Link, IndexLink} = require('react-router');
const logo = require('../images/logo.png');
const browsegifts = require('../images/Asset20.png');
const login = require('../images/Asset21.png');
import UserLogin from '../container/UserLogin';
var Nav = React.createClass({

  render: function() {
    return(
      <nav className="top-bar">
          <div className="column medium-6">
            <div className="column large-offset-11 medium-offset-1 small-offset-4">
              <IndexLink to ='/'><img src={logo}/></IndexLink>
            </div>
          </div>
        <div className="column medium-6 small-12">
          <div className="top-bar-right">
            <ul className="menu">
              <li>
                <img src={browsegifts} style={{paddingRight:'1em'}}/>
                <span><Link to='/browsegifts' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Browse Gifts</Link></span>
              </li>
              <li>
                <Link to='/login' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Login</Link>
              </li>
              <li>
                <img src={login}/>
              </li>
          </ul>
          </div>
          </div>
      </nav>
    );
  }
});

module.exports = Nav;
