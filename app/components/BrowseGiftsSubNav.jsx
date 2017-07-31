var React = require('react');
import ReactDOM from 'react-dom';
var {Link, IndexLink, routes, router} = require('react-router');
const Asset31 = require('../images/Asset31.png');
import Popup from 'react-popup';
var ReactMenuAim = require('react-menu-aim');
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import Breadcrumbs from 'react-breadcrumbs';
require ('style!css!node_modules/rc-menu/assets/index.css');
var Asset38 = require('../images/Asset38.png');

  var BrowseGiftsSubNav = React.createClass({
   mixins: [ReactMenuAim],
   componentWillMount: function() {
     // Config ReactMenuAim here
     this.initMenuAim({
       submenuDirection: 'right',
       menuSelector: '.menu'
     });
   },

   // This is your true handler when a menu item is going to be active
   handleSwitchMenuIndex: function(index) {
     // ...
   },


  render: function(){
    return(
      <div>
      <div className="row browsegiftssubnav">
        <div className="column medium-2" style={{color:"#ae573c",paddingTop:"0.7em",fontSize:"16px"}}>
          <div><img style={{width:"30px", marginBottom:"0em"}} src={Asset31}/> > All Gifts</div>
        </div>


        <div className="column medium-8" style={{paddingTop:"1em"}}>

        </div>
        <div className="column medium-2" style={{paddingTop:"1em"}}>
            Can't Find? <span style={{color:"#58b9b0"}}>Request a Gift</span>
        </div>
      </div>

      <div className="browsegiftsmenu">
        <Menu mode='horizontal' openAnimation = 'slide-up'>
          <SubMenu title="Home">
            <ul className = "menu">
              <li className="menutext">
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Decor</Link>
              </li>
              <li className="menutext">
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Electronics</Link>
              </li>
              <li className="menutext">
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Bed and Bath</Link>
              </li>
              <li className="menutext">
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Furniture</Link>
              </li>
              <li className="menutext">
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
                <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Oraganization</Link>
              </li>
            </ul>
            <img src={Asset38} style={{marginLeft:"35%", padding:"3%"}}/>
          </SubMenu>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Kitchen</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Dining</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Experience</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Accessories</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Beauty & Grooming</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'#e0b2a1'}}>Must Haves</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/kits' activeClassName="active" activeStyle={{fontWeight: 'bold',color:'Red'}}>Starter Kits</Link>
          </MenuItem>
        </Menu>

      </div>
    </div>
    );
  }
});

module.exports = BrowseGiftsSubNav;
